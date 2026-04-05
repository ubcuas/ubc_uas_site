/**
 * optimize-images.mjs
 *
 * Batch resize & convert all PNG/JPG images under src/assets/ to WebP.
 * Uses `sharp` for high-quality processing.
 *
 * Usage:  node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.resolve(__dirname, '..', 'src', 'assets');

const WEBP_QUALITY = 85;

// ── Size tiers ────────────────────────────────────────────────
// Each rule: { match: fn(relativePath) => bool, maxWidth: number | null }
// null = skip this file entirely
const TIERS = [
    // Skip tiny files (icons, logos < 50 KB can be kept as-is but still convert to webp)
    {
        name: 'favicon',
        match: (rel) => rel === 'favicon.png',
        maxWidth: null, // skip entirely – favicons should stay png
    },
    {
        name: 'uas-logo',
        match: (rel) => rel === 'uas-logo.png' || rel === 'logo.png',
        maxWidth: null, // skip – very small already
    },
    // Hero / backgrounds
    {
        name: 'hero-backgrounds',
        match: (rel) =>
            /home-hero-bg/i.test(rel) ||
            /sunDrone/i.test(rel) ||
            /hero-background/i.test(rel) ||
            /stats-background/i.test(rel) ||
            /pages[\\/]Recruitment[\\/]team/i.test(rel) ||
            rel.includes('home/mission/background') ||
            rel.includes('home/who-we-are/background') ||
            rel.includes('home/stats/page-2') ||
            /old-home-herobg/i.test(rel),
        maxWidth: 1920,
    },
    // Team group photos
    {
        name: 'team-group-photos',
        match: (rel) => rel.startsWith('teamPhotos' + path.sep) || rel.startsWith('teamPhotos/'),
        maxWidth: 1600,
    },
    // Team portraits
    {
        name: 'team-portraits',
        match: (rel) => rel.startsWith('teamPortraits' + path.sep) || rel.startsWith('teamPortraits/'),
        maxWidth: 800,
    },
    // Team carousel
    {
        name: 'team-carousel',
        match: (rel) =>
            (rel.startsWith('carousel/teamCarousel') || rel.startsWith('carousel\\teamCarousel')),
        maxWidth: 1400,
    },
    // Project carousel images
    {
        name: 'carousel',
        match: (rel) => rel.startsWith('carousel' + path.sep) || rel.startsWith('carousel/'),
        maxWidth: 1200,
    },
    // Home last-screen images
    {
        name: 'home-last-screen',
        match: (rel) =>
            rel.startsWith('home/last-screen') || rel.startsWith('home\\last-screen'),
        maxWidth: 1200,
    },
    // Small icons (linkedin, flag, pin, etc.)
    {
        name: 'icons',
        match: (rel) => rel.startsWith('icons' + path.sep) || rel.startsWith('icons/'),
        maxWidth: 200,
    },
    // Home hero title
    {
        name: 'home-hero-title',
        match: (rel) => rel === 'home-hero-title.png',
        maxWidth: 800,
    },
    // blue_linkedIn
    {
        name: 'blue-linkedin',
        match: (rel) => rel === 'blue_linkedIn.png',
        maxWidth: 200,
    },
];

// ── Helpers ───────────────────────────────────────────────────
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg']);

async function getAllImages(dir, base = dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const results = [];
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...(await getAllImages(full, base)));
        } else if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
            results.push({
                absolute: full,
                relative: path.relative(base, full),
            });
        }
    }
    return results;
}

function getTier(relativePath) {
    for (const tier of TIERS) {
        if (tier.match(relativePath)) return tier;
    }
    // Default: resize to 1200px
    return { name: 'default', maxWidth: 1200 };
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
    const images = await getAllImages(ASSETS_DIR);
    console.log(`Found ${images.length} image(s) to process.\n`);

    let totalBefore = 0;
    let totalAfter = 0;
    let skipped = 0;

    for (const img of images) {
        const tier = getTier(img.relative);

        if (tier.maxWidth === null) {
            console.log(`⏭  SKIP  ${img.relative}  (${tier.name})`);
            skipped++;
            continue;
        }

        const stat = await fs.stat(img.absolute);
        const sizeBefore = stat.size;
        totalBefore += sizeBefore;

        try {
            const metadata = await sharp(img.absolute).metadata();
            const needsResize = metadata.width > tier.maxWidth;

            let pipeline = sharp(img.absolute);
            if (needsResize) {
                pipeline = pipeline.resize({ width: tier.maxWidth, withoutEnlargement: true });
            }
            const buffer = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();

            // Write .webp file
            const ext = path.extname(img.absolute);
            const webpPath = img.absolute.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
            await fs.writeFile(webpPath, buffer);

            // Remove original
            await fs.unlink(img.absolute);

            const sizeAfter = buffer.length;
            totalAfter += sizeAfter;

            const pct = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
            const before = (sizeBefore / 1024 / 1024).toFixed(2);
            const after = (sizeAfter / 1024 / 1024).toFixed(2);
            const resizeNote = needsResize
                ? ` (resized ${metadata.width}→${tier.maxWidth}px)`
                : '';

            console.log(
                `✅  ${img.relative}  ${before} MB → ${after} MB  (−${pct}%)${resizeNote}  [${tier.name}]`
            );
        } catch (err) {
            console.error(`❌  ERROR  ${img.relative}: ${err.message}`);
        }
    }

    console.log('\n─── Summary ───');
    console.log(`Processed: ${images.length - skipped}  |  Skipped: ${skipped}`);
    console.log(
        `Total before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB  →  Total after: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`
    );
    console.log(
        `Savings: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`
    );
}

main().catch((err) => {
    console.error('Fatal:', err);
    process.exit(1);
});

import { useEffect, useRef, useState } from "react";

export default function ImageCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const hasSlides = slides.length > 0;

  const go = (dir) => {
    if (!hasSlides) return;
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  const goto = (i) => {
    if (!hasSlides) return;
    setIndex(((i % slides.length) + slides.length) % slides.length);
  };

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSlides, slides.length]);

  // Swipe support
  useEffect(() => {
    const el = trackRef.current;
    if (!el || !hasSlides) return;

    let startX = 0;
    let dx = 0;

    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchMove = (e) => (dx = e.touches[0].clientX - startX);
    const onTouchEnd = () => {
      if (dx > 50) go(-1);
      else if (dx < -50) go(1);
      dx = 0;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSlides, slides.length]);

  return (
    <div className="carousel" role="region" aria-label="Team photos carousel">
      <button
        className="carousel__arrow carousel__arrow--left"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        disabled={!hasSlides}
      />
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          ref={trackRef}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {hasSlides
            ? slides.map((s, i) => (
                <div className="carousel__slide" key={i} aria-hidden={i !== index}>
                  <img src={s.src} alt={s.alt ?? `Slide ${i + 1}`} />
                </div>
              ))
            : null}
        </div>
      </div>
      <button
        className="carousel__arrow carousel__arrow--right"
        aria-label="Next slide"
        onClick={() => go(1)}
        disabled={!hasSlides}
      />

      <div className="carousel__dots" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === index ? "is-active" : ""}`}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goto(i)}
          />
        ))}
      </div>
    </div>
  );
}

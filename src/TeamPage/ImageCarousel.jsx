import { useCallback, useEffect, useRef, useState } from "react";

export default function ImageCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const hasSlides = slides.length > 0;

  const go = useCallback((dir) => {
    if (!hasSlides) return;
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, [hasSlides, slides.length]);

  const goto = useCallback((i) => {
    if (!hasSlides) return;
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, [hasSlides, slides.length]);

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
    if (!el || !hasSlides) return undefined;

    let pointerId = null;
    let startX = 0;
    let deltaX = 0;

    const onPointerDown = (event) => {
      if (!event.isPrimary) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      deltaX = 0;
      el.classList.add("is-dragging");
      el.setPointerCapture?.(pointerId);
    };

    const onPointerMove = (event) => {
      if (pointerId !== event.pointerId) return;
      deltaX = event.clientX - startX;
    };

    const onPointerEnd = (event) => {
      if (pointerId !== event.pointerId) return;
      if (Math.abs(deltaX) > 40) {
        go(deltaX > 0 ? -1 : 1);
      }
      el.classList.remove("is-dragging");
      el.releasePointerCapture?.(pointerId);
      pointerId = null;
      deltaX = 0;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerEnd);
    el.addEventListener("pointercancel", onPointerEnd);
    el.addEventListener("pointerleave", onPointerEnd);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerEnd);
      el.removeEventListener("pointercancel", onPointerEnd);
      el.removeEventListener("pointerleave", onPointerEnd);
    };
  }, [hasSlides, go]);

  return (
    <div className="carousel" role="region" aria-label="Team photos carousel">
      <button
        className="carousel__arrow carousel__arrow--left"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        disabled={!hasSlides}
      >
        <span aria-hidden="true">&#10094;</span>
      </button>
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
      >
        <span aria-hidden="true">&#10095;</span>
      </button>

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

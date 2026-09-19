import { Children, cloneElement, useEffect, useRef, useState } from "react";

const COPY_COUNT = 5;
const MIDDLE_COPY = Math.floor(COPY_COUNT / 2);

export function LogoMarquee({ children, ariaLabel, speed = 0.35 }) {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const frameRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragRef = useRef(null);
  const touchResumeRef = useRef(null);
  const offsetRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const positionAtMiddleCopy = () => {
      viewport.scrollLeft = group.offsetWidth * MIDDLE_COPY;
    };

    const normalizePosition = () => {
      const groupWidth = group.offsetWidth;
      if (!groupWidth) return;

      if (viewport.scrollLeft >= groupWidth * (MIDDLE_COPY + 1)) {
        viewport.scrollLeft -= groupWidth;
      } else if (viewport.scrollLeft <= groupWidth * (MIDDLE_COPY - 1)) {
        viewport.scrollLeft += groupWidth;
      }
    };

    const animate = () => {
      const groupWidth = group.offsetWidth;
      if (
        groupWidth > 0
        && !pausedRef.current
        && !draggingRef.current
        && !reducedMotion.matches
      ) {
        // Scroll offsets snap to whole pixels, so sub-pixel steps would be lost.
        // We accumulate them here and only move the strip once a full pixel is due.
        offsetRef.current += speed;
        const step = Math.floor(offsetRef.current);
        if (step >= 1) {
          offsetRef.current -= step;
          viewport.scrollLeft += step;
          normalizePosition();
        }
      }
      frameRef.current = window.requestAnimationFrame(animate);
    };

    positionAtMiddleCopy();
    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("resize", positionAtMiddleCopy);
    viewport.addEventListener("scroll", normalizePosition);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", positionAtMiddleCopy);
      viewport.removeEventListener("scroll", normalizePosition);
    };
  }, [speed]);

  // Touch devices scroll the strip natively; we only pause the automatic movement
  // while the finger is on it (and for a moment after, to let momentum settle).
  const pauseForTouch = () => {
    window.clearTimeout(touchResumeRef.current);
    pausedRef.current = true;
  };

  const resumeAfterTouch = () => {
    window.clearTimeout(touchResumeRef.current);
    touchResumeRef.current = window.setTimeout(() => { pausedRef.current = false; }, 2500);
  };

  useEffect(() => () => window.clearTimeout(touchResumeRef.current), []);

  const finishDrag = (event) => {
    if (draggingRef.current && viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    draggingRef.current = false;
    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    const viewport = viewportRef.current;
    const drag = dragRef.current;
    if (!viewport || !drag) return;

    const deltaX = event.clientX - drag.x;
    const deltaY = event.clientY - drag.y;

    if (!draggingRef.current) {
      if (Math.abs(deltaX) < 7 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      draggingRef.current = true;
      setIsDragging(true);
      viewport.setPointerCapture(event.pointerId);
    }

    viewport.scrollLeft = drag.scrollLeft - deltaX;
  };

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    pausedRef.current = true;
    viewportRef.current?.scrollBy({
      left: event.key === "ArrowLeft" ? -180 : 180,
      behavior: "smooth",
    });
  };

  return (
    <div
      aria-label={ariaLabel}
      className={isDragging ? "logo-marquee is-dragging" : "logo-marquee"}
      onBlur={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onPointerCancel={finishDrag}
      onPointerDown={(event) => {
        if (event.button !== 0 || event.pointerType !== "mouse") return;
        dragRef.current = {
          x: event.clientX,
          y: event.clientY,
          scrollLeft: viewportRef.current.scrollLeft,
        };
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onTouchCancel={resumeAfterTouch}
      onTouchEnd={resumeAfterTouch}
      onTouchStart={pauseForTouch}
      ref={viewportRef}
      role="region"
      tabIndex="0"
    >
      <div className="logo-marquee__track">
        {Array.from({ length: COPY_COUNT }, (_, copyIndex) => (
          <div
            aria-hidden={copyIndex !== MIDDLE_COPY}
            className="logo-marquee__group"
            key={copyIndex}
            ref={copyIndex === MIDDLE_COPY ? groupRef : undefined}
          >
            {items.map((item, itemIndex) => (
              <div className="logo-marquee__item" key={item.key ?? itemIndex}>
                {cloneElement(item, { inert: copyIndex !== MIDDLE_COPY ? "" : undefined })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

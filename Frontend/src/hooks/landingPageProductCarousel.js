import { useState, useEffect, useRef } from "react";

export const useLandingPageProductCarousel = () => {
  const currentSlide = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [displaySlide, setDisplaySlide] = useState(5);

  useEffect(() => {
    const slideCount = currentSlide.current
      ? currentSlide.current.children.length
      : 0;
    if (currentSlide.current && slideCount > 0) {
      const slideWidth = currentSlide.current.clientWidth / displaySlide;
      currentSlide.current.style.transform = `translateX(-${
        activeSlide * slideWidth
      }px)`;
      currentSlide.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [activeSlide, displaySlide]);

  const handleNextSlide = () => {
    if (currentSlide.current) {
      setActiveSlide((prev) =>
        prev < currentSlide.current.children.length - displaySlide
          ? prev + 1
          : 0
      );
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide.current) {
      setActiveSlide((prev) =>
        prev > 0
          ? prev - 1
          : currentSlide.current.children.length - displaySlide
      );
    }
  };

  return {
    currentSlide,
    activeSlide,
    handleNextSlide,
    handlePrevSlide,
    setDisplaySlide,
  };
};

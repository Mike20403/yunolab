"use client";
import React, { useState, useRef } from "react";

const concernsData = [
  {
    title: "Facial Anti-Ageing",
    image: "/images/concern1.png",
  },
  {
    title: "Acne Scarring & Acne Clearance",
    image: "/images/concern2.png",
  },
  {
    title: "Melasma, Pigmentation & Freckles",
    image: "/images/concern3.png",
  },
  {
    title: "Stretch Marks",
    image: "/images/concern4.png",
  },
  {
    title: "Hair Loss & Hair Thinning",
    image: "/images/concern5.png",
  },
  {
    title: "Body Contouring & Fat Reduction",
    image: "/images/concern6.png",
  },
];

const Concerns: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of items to show per slide

  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const translateX = useRef(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      prev < Math.ceil(concernsData.length / itemsPerPage) - 1 ? prev + 1 : prev
    );
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;

    // Disable transitions during dragging
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;

    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX.current;

    if (sliderRef.current) {
      translateX.current = -currentPage * 100 + (deltaX / sliderRef.current.offsetWidth) * 100;
      sliderRef.current.style.transform = `translateX(${translateX.current}%)`;
    }
  };

  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    const currentX = "touches" in e ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = currentX - startX.current;

    // Restore transition after dragging
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease";
    }

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) handlePrev();
      else handleNext();
    } else {
      // Reset transform if the swipe is not large enough
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentPage * 100}%)`;
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;

      // Reset transform to current page if dragging is interrupted
      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 0.5s ease";
        sliderRef.current.style.transform = `translateX(-${currentPage * 100}%)`;
      }
    }
  };

  return (
    <section className="mx-auto bg-white w-full px-4 py-12">
      <h2 className="text-2xl text-black font-bold mb-6">Concerns</h2>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Slider Container */}
      <div
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {concernsData.map((concern, index) => (
            <div key={index} className="min-w-[33.33%] flex-shrink-0 p-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={concern.image}
                  alt={concern.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                  <h3 className="text-lg font-semibold">{concern.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({
          length: Math.ceil(concernsData.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentPage === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Concerns;

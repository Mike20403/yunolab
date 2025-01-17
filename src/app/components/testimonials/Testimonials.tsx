"use client";
import React, { useState } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section className="bg-[#f4e9df] text-center py-16 px-6">
      <h2 className="text-[3rem] text-[#6B6356] font-bold mb-8">Don’t just take our word for it</h2>
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-white rounded-full border border-gray-300 p-2 shadow hover:bg-gray-100"
          aria-label="Previous Testimonial"
        >
          ◀
        </button>

        {/* Testimonials Content */}
        <div className="flex flex-col max-w-xl mx-auto">
          <p className="text-lg text-gray-700 mb-4 font-extralight">{testimonials[currentIndex].text}</p>
          <p className="font-semibold text-[#6B6356]">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 bg-white rounded-full border border-gray-300 p-2 shadow hover:bg-gray-100"
          aria-label="Next Testimonial"
        >
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

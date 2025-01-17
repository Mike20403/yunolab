import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 text-white max-w-4xl">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Unveil Your Best Self with Cosmedix Clinics’ Expert Care and Cutting-Edge Treatments
        </h1>
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

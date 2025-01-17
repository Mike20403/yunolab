import React from "react";

const Treatments: React.FC = () => {
  return (
    <section
      className="w-full min-h-[30rem] bg-white mx-auto px-4 py-12"
      aria-labelledby="treatments-heading"
    >
      <h2 id="treatments-heading" className="sr-only">
        Treatments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Treatment 1 */}
        <div className="relative bg-white border border-gray-200 shadow-md rounded-bl-[2rem] p-6">
          <h3 className="text-[2rem] text-gray-800 mb-4 overflow-hidden overflow-ellipsis">
            Specialise in non-surgical corrective and cosmetic treatments
          </h3>
          <div className="relative overflow-hidden rounded-lg float-right">
            <img
              src="/images/treatment1.jpg"
              alt="Specialised in non-surgical corrective and cosmetic treatments"
              className="w-[20rem] h-[15rem] object-cover rounded-[2rem]"
            />
          </div>
          <div className="absolute bottom-4 left-4 text-2xl font-bold text-gray-700">
            1
          </div>
        </div>

        {/* Treatment 2 */}
        <div className="relative bg-white border border-gray-200 shadow-md rounded-bl-[2rem] p-6">
          <h3 className="text-[2rem] text-gray-800 mb-4 overflow-hidden overflow-ellipsis">
            Option between In-Clinic and Virtual Consultation
          </h3>
          <div className="relative overflow-hidden rounded-lg float-right">
            <img
              src="/images/treatment2.png"
              alt="Option between In-Clinic and Virtual Consultation"
              className="w-[20rem] h-[15rem] object-cover rounded-[2rem]"
            />
          </div>
          <div className="absolute bottom-4 left-4 text-2xl font-bold text-gray-700">
            2
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;

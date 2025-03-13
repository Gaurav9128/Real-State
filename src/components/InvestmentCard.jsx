import React from "react";
import realEstateImage from "../assets/images/High.jpeg"; // Adjust the filename

const InvestmentCard = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <div className="bg-[#f5ede2] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Text Content */}
        <div className="p-4 sm:p-6 flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            High-Yield Investment Opportunity in Class A Office Real Estate, Cyprus
          </h2>
          <p className="mt-3 sm:mt-4 text-md sm:text-lg text-[#c39056] font-semibold">
            Secure an early-stage investment at a 30% below comparable properties price
          </p>
          <ul className="mt-2 text-gray-700 text-sm sm:text-base">
            <li>• Purchase Price: €5,750/m²</li>
            <li>• Average Market Price: €8,500/m²</li>
          </ul>
          <p className="mt-3 sm:mt-4 font-semibold text-gray-800">
            Class A Location in the business district of Limassol
          </p>
          <p className="mt-1 font-semibold text-[#c39056]">International Developer</p>
          <p className="text-gray-700 text-sm sm:text-base">
            Ranked among the top three in the premium segment in Cyprus
          </p>
          <button className="mt-5 sm:mt-6 bg-[#c39056] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-md hover:bg-[#b37e48] transition">
            Inquire Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={realEstateImage}
            alt="Real Estate"
            className="w-full h-auto max-h-72 sm:max-h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;

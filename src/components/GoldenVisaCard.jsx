import React from "react";
import goldenVisaImg from "../assets/images/gold1.png"; // Replace with your actual image
import badgeLogo from "../assets/images/gold.png"; // Badge image

const GoldenVisaCard = () => {
  return (
    <div className="bg-[#F6EFE3] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto my-6 sm:my-12">
      {/* Left Section: Text Content */}
      <div className="w-full lg:w-2/3 text-center lg:text-left px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          Greece Golden Visa: Europe’s Top Residency Programme
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-[#C5925C] mt-4">
          Investment from €250,000
        </p>
        <p className="text-gray-600 text-sm sm:text-md">Eligible residential properties in any area</p>

        <p className="text-lg sm:text-xl font-semibold text-[#C5925C] mt-6">
          Athens: A Prime Investment Choice
        </p>
        <p className="text-gray-600 text-sm sm:text-md">
          Property values in Athens have soared by 69% over 10 years, with prospected growth
        </p>

        <p className="text-lg sm:text-xl font-semibold text-[#C5925C] mt-6">
          Why Choose Greece Residence by Investment?
        </p>
        <p className="text-gray-600 text-sm sm:text-md">
          Enjoy unrestricted Schengen travel, EU banking access, and greater asset flexibility
        </p>

        {/* Button */}
        <button className="bg-[#C5925C] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md mt-6 text-md sm:text-lg hover:bg-[#b07f4e] transition">
          Request Properties for Golden Visa
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/3 mt-6 sm:mt-8 lg:mt-0 lg:ml-8 relative flex justify-center">
        <img
          src={goldenVisaImg}
          alt="Athens Parthenon"
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto"
        />
        {/* Badge Image */}
        <img
          src={badgeLogo}
          alt="Golden Visa Badge"
          className="absolute top-2 sm:top-4 right-2 sm:right-4 w-16 sm:w-20 lg:w-24"
        />
      </div>
    </div>
  );
};

export default GoldenVisaCard;

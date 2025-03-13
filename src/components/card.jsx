import React from "react";
import houseImage from "../assets/images/card.jpeg";

const InvestmentCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-lg w-full max-w-5xl mx-auto">
      {/* Left Side */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        {/* Countdown Timer */}
        <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
          {[
            { value: "06", label: "Month" },
            { value: "25", label: "Days" },
            { value: "12", label: "Hours" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-2 md:p-3 rounded-md text-center w-[80px]">
              <p className="text-xl md:text-2xl font-bold">{item.value}</p>
              <p className="text-xs md:text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold text-yellow-700">Remaining</p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Equity Raising For Luxury House In San Diego
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          Be an Investor and live your dream life, follow the links below to read more about the project.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 justify-center md:justify-start">
          <button className="bg-yellow-700 text-white px-5 py-2 rounded-md font-semibold w-full md:w-auto">
            Become Investor now
          </button>
          <button className="border border-gray-400 px-5 py-2 rounded-md font-semibold text-gray-700 w-full md:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 mt-6 md:mt-0 md:ml-6">
        <img
          src={houseImage}
          alt="Luxury House"
          className="w-full h-auto max-h-[300px] md:max-h-[400px] rounded-xl shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default InvestmentCard;

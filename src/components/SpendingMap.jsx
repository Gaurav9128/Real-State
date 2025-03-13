import React from "react";
import mapImage from "../assets/images/map.png"; // Correct path according to your folder structure

const SpendingMap = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
      {/* Left Section - Map */}
      <div className="relative w-full md:w-2/3">
        <h2 className="text-center text-2xl font-bold mb-6">
          Where people are spending most across globe
        </h2>
        <div className="relative w-full h-[400px] flex justify-center items-center">
          {/* Map Image */}
          <img
            src={mapImage}
            alt="World Map"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Data Points */}
          {[
            { country: "United States", value: 2460, top: "20%", left: "10%" },
            { country: "England", value: 1489, top: "30%", left: "45%" },
            { country: "Russia", value: 2430, top: "15%", left: "65%" },
            { country: "India", value: 2099, top: "50%", left: "60%" },
            { country: "Africa", value: 1689, top: "65%", left: "40%" },
            { country: "Australia", value: 1189, top: "75%", left: "80%" },
          ].map((item, index) => (
            <div
              key={index}
              className="absolute bg-[#F6EFE3] text-[#000000] p-2 rounded-full text-center shadow-lg"
              style={{ top: item.top, left: item.left }}
            >
              <span className="block font-bold text-lg">{item.value}</span>
              <span className="text-xs">{item.country}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Stats Card */}
      <div className="bg-[#F6EFE3] rounded-lg p-6 shadow-lg md:w-1/3 mt-8 md:mt-0 md:ml-6">
        <h3 className="text-xl font-semibold mb-4">Your Trusted Partner</h3>
        <div className="space-y-4">
          <div>
            <p className="text-3xl font-bold text-yellow-600">10</p>
            <p className="text-[#000000]">Offices In Europe</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-600">2,330</p>
            <p className="text-[#000000]">Closed Transactions</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-600">1,000</p>
            <p className="text-[#000000]">Partners From All Over The World</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingMap;

import React from "react";
import personImage from "../assets/images/person.png";

const AgentSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">For Agents and Developers</h2>
        <p className="text-gray-600">
          Unnar has handled over 3,000 service requests. We communicate with clients to understand their needs and provide the best solutions.
        </p>
        <h3 className="font-semibold">We send the client your way</h3>
        <p className="text-gray-600">
          Our partners receive not only requests about their properties but also requests regarding other partners’ real properties.
        </p>
        <button className="bg-[#c49a6c] text-white px-6 py-2 rounded-md hover:bg-[#b2865d]">
          Become a partner
        </button>
      </div>

      {/* Right Content - Images */}
      <div className="relative mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-[220px] h-[250px]">
          {/* Background Image */}
          <img 
            src={personImage} 
            alt="Agent" 
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-[#c49a6c] text-white text-sm font-semibold w-16 h-16 flex items-center justify-center rounded-full shadow-md">
            <span>25 Years</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSection;

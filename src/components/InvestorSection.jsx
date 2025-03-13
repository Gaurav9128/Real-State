import React from "react";
import investorsImage from "../assets/images/Group.png"; 

const InvestorSection = () => {
  return (
    <div className="flex justify-center items-center p-6 sm:p-10">
      <img
        src={investorsImage}
        alt="Investment Returns"
        className="w-full h-auto max-h-96 object-cover"
      />
    </div>
  );
};

export default InvestorSection;

import React from "react";
import ballonImage from "../assets/images/ballon.png"; // ✅ Import the image

const FooterComponent = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Navigation Links with Bottom Golden Line */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-gray-800 text-sm font-medium pb-4 border-b-4 border-yellow-500 text-center">
          {["Real Estate", "New Homes", "Popular Area", "Popular Searches"].map((link, index) => (
            <a key={index} href="#" className="hover:text-gray-600 block sm:inline">
              {link}
            </a>
          ))}
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-gray-700 text-sm text-center sm:text-left">
          {[
            ["Real Estate NY", "Real Estate Brooklyn", "Real Estate Queens", "Real Estate The Bronx", "Real Estate Staten", "Real Estate Jersey"],
            ["Real Estate Norwalk", "Real Estate Downey", "Real Estate Torrance", "Real Estate Pomona", "Real Estate Glendale", "Real Estate Inglewood"],
            ["Real Estate Chicago", "Real Estate Cook", "Real Estate Kane", "Real Estate Lake", "Real Estate Will", "Real Estate DuPage"],
            ["Real Estate Miami", "Real Estate Calhoun", "Real Estate Charlotte", "Real Estate Citrus", "Real Estate Clay", "Real Estate Collier"]
          ].map((list, idx) => (
            <div key={idx}>
              {list.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-10 px-4">
        <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={ballonImage} // ✅ Use the imported image
            alt="Hot Air Balloon"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4 text-center">
            <h2 className="text-lg sm:text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <div className="mt-4 flex flex-col sm:flex-row items-center bg-white rounded-full overflow-hidden shadow-lg w-full max-w-lg">
              <input
                type="email"
                placeholder="xyz.asas@gmail.com"
                className="px-4 py-2 w-full text-gray-800 outline-none"
              />
              <button className="bg-yellow-500 px-4 py-2 text-white flex items-center justify-center sm:w-auto w-full">
                <span className="mr-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

import React from "react";
import america from "../assets/images/travel4.jpeg";
import spain from "../assets/images/travel3.jpeg";
import london from "../assets/images/travel2.jpeg";
import france from "../assets/images/travel1.jpeg";

const countries = [
    { name: "AMERICA", image: america },
    { name: "SPAIN", image: spain },
    { name: "LONDON", image: london },
    { name: "FRANCE", image: france },
];

const CountryCards = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Top 4 Countries People Searched for in January 2025
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <div key={index} className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold tracking-wide">
                {country.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCards;
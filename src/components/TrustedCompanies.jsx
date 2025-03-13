import React from "react";
import amazonLogo from "../assets/images/amazon.png";
import amdLogo from "../assets/images/amd.png";
import ciscoLogo from "../assets/images/cisco.png";
import dropcamLogo from "../assets/images/dropcam.png";
import logitechLogo from "../assets/images/logitech.png";
import spotifyLogo from "../assets/images/spotify.png";

const TrustedCompanies = () => {
  const companies = [
    { name: "Amazon", logo: amazonLogo },
    { name: "AMD", logo: amdLogo },
    { name: "Cisco", logo: ciscoLogo },
    { name: "Dropcam", logo: dropcamLogo },
    { name: "Logitech", logo: logitechLogo },
    { name: "Spotify", logo: spotifyLogo },
  ];

  return (
    <div className="bg-black text-white py-10 px-6">
      {/* Heading */}
      <h2 className="text-center text-lg md:text-xl mb-8 max-w-[80%] mx-auto">
        Thousands of leading developers and agencies worldwide trust Unnar.
      </h2>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 items-center justify-items-center max-w-[85%] mx-auto">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="h-[36px] md:h-[40px] w-auto max-w-[110px] md:max-w-[120px] object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedCompanies;

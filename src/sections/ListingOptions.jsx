import React from "react";

const ListingOptions = () => {
  return (
    <section
      className="relative bg-[#F5ECE1] py-8 px-6 md:py-12 md:px-16 w-full"
      style={{
        backgroundImage: "url('/images/pattern.png')",
        backgroundPosition: "right bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center md:text-left">
          Advertise your property listings in Unnar’s exclusive catalogue.
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed text-center md:text-left">
          We welcome collaboration with companies and agencies worldwide. Unnar
          offers the following listing options:
        </p>

        {/* Listing Options */}
        <ul className="text-gray-900 text-left space-y-3 leading-relaxed px-2">
          <li>
            <strong>Standard Listing</strong> – Feature your property with
            essential details and images.
          </li>
          <li>
            <strong>Premium Listing</strong> – Gain more visibility with
            priority placement.
          </li>
          <li>
            <strong>Featured Listing</strong> – Highlight your property on the
            homepage and top searches.
          </li>
          <li>
            <strong>Sponsored Listing</strong> – Boost your listing with
            promotional support.
          </li>
          <li>
            <strong>Exclusive Listing</strong> – Get maximum exposure with a
            dedicated showcase.
          </li>
        </ul>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-[#C29A71] text-white px-6 py-3 rounded-md text-lg hover:bg-[#a5835f] transition">
            Learn more about advertising
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingOptions;

import spainWorkVisa from "../assets/images/Rectangle1.jpeg";
import spainStudentVisa from "../assets/images/Rectangle1.jpeg";
import hungaryVisa from "../assets/images/Rectangle1.jpeg";
import franceResidence from "../assets/images/Rectangle1.jpeg";
import russianBuyers from "../assets/images/Rectangle1.jpeg";

export default function RecentArticles() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">Read Recent Articles</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base text-center leading-relaxed 
                    break-words whitespace-normal max-w-xs sm:max-w-lg mx-auto">
          Going Somewhere To Celebrate This Season?
          Whether You’re Going Home Or Somewhere To Roam,
          We’ve Got The Travel Tools To Get You To Your Destination.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Left Section - Highlighted Statistic */}
        <div className="bg-beige p-6 rounded-lg  text-center mx-auto max-w-md">
          <h3 className="text-5xl font-bold text-brown">73%</h3>
          <p className="font-semibold mt-2 leading-snug px-4 text-lg">
            of respondents believe that the real estate market will grow in 2025
          </p>
          <hr className="my-4 border-gray-300" />
          <p className="text-gray-500 text-sm px-4">Russian-speaking buyers of overseas real estate – 2023</p>
        </div>

        {/* Right Section - Articles List */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { image: spainWorkVisa, date: "Yesterday", title: "How to get a Spain work visa in 2025" },
            { image: spainStudentVisa, date: "Yesterday", title: "How to Get a Student Visa for Spain in 2025" },
            { image: hungaryVisa, date: "28 Jan, 2025", title: "Hungary Golden Visa Programme – Residence Permit by Investment in 2025" },
            { image: franceResidence, date: "Yesterday", title: "Residence permit in France get new update" },
            { image: russianBuyers, date: "Yesterday", title: "Russian-speaking buyers of overseas real estate – 2023" },
          ].map((article, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-yellow-500 text-sm">{article.date}</p>
                <p className="font-semibold text-lg">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Cameron Williamson",
    role: "Brand Owner",
    review: "A real sense of community, nurtured",
    description:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Harvey Specter",
    role: "Lawyer",
    review: "The facilities are superb. Clean, slick, bright.",
    description:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... READ FULL",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Shivom Chi-Ling",
    role: "Content Creator",
    review: "A real sense of community, nurtured",
    description:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <p className="text-gray-500 text-sm">{review.role}</p>
        </div>
      </div>
      <h4 className="font-bold mt-4">{review.review}</h4>
      <p className="text-gray-600 text-sm mt-2">{review.description}</p>
      <div className="mt-4 flex items-center text-gray-500 text-sm">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" className="w-5 h-5 mr-2" />
        Google Reviews
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="bg-[#F5EFE6] py-12 px-6 relative">
      <div className="flex justify-start items-center mb-6 pl-10 relative">
        <h2 className="text-2xl font-semibold flex items-center">
          Reviews from Our Recent Customers 
          <span className="text-[#C8A165] font-light ml-2 text-sm">(79 Reviews)</span>
        </h2>
      </div>
      <div className="flex justify-start space-x-6 pl-10 relative">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        <div className="absolute right-40 top-[-40px] flex space-x-2">
          <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-200">
            <ChevronLeft size={14} />
          </button>
          <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-200">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
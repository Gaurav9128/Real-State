import React from "react";
import image1 from "../assets/images/trending1.jpeg";
import image2 from "../assets/images/trending2.jpeg";
import image3 from "../assets/images/trending3.jpeg";
import featuredImage from "../assets/images/trending4.jpeg";

const NewsCard = ({ image, author, date, title, description }) => (
  <div className="flex gap-3 p-4 bg-white rounded-lg shadow-md items-center">
    <img src={image} alt="news" className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg" />
    <div>
      <p className="text-xs text-gray-500 font-medium">{author} - {date}</p>
      <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-tight">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const TrendingNews = () => {
  const news = [
    {
      image: image1,
      author: "Race98",
      date: "03 June 2023",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: image2,
      author: "Jony.Ls",
      date: "03 June 2023",
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: image3,
      author: "King.F",
      date: "03 June 2023",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row p-4 md:p-6 bg-gray-100 min-h-screen items-start">
      {/* Trending News Sidebar */}
      <div className="w-full lg:w-1/3 bg-amber-50 p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">Trending News</h2>
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>

      {/* Featured News */}
      <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden mt-6 lg:mt-0">
        <img
          src={featuredImage}
          alt="featured"
          className="w-full h-48 md:h-60 lg:h-80 object-cover"
        />
        <div className="p-4 md:p-6 pb-0">
          <p className="text-xs md:text-sm text-amber-500 font-medium">Debits - 03 June 2023</p>
          <h1 className="text-lg md:text-2xl font-bold text-gray-900 mt-2 leading-snug">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;

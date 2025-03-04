import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // For navigation arrows

const Banner = () => {
  const [slides, setSlides] = useState([]); // State to store slide data
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch slide data from API
  useEffect(() => {
    fetch("images.json") // Replace with your API endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setSlides(data); // Set the fetched data to state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching slides:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  // Custom Next Arrow Component
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-200"
        onClick={onClick}
      >
        <FaArrowRight className="text-white text-2xl" />
      </div>
    );
  }

  // Custom Previous Arrow Component
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-200 z-10"
        onClick={onClick}
      >
        <FaArrowLeft className="text-white text-2xl" />
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If no slides are available
  if (slides.length === 0) {
    return (
      <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100">
        <p className="text-xl text-gray-600">No slides available.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative my-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white animate__animated animate__fadeInUp">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                  {slide.description}
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
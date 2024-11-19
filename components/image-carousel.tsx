'use client'

import React, { PropsWithChildren, useState } from "react";
import Carousel from "react-multi-carousel";

const ImageCarousel = ({ children }: PropsWithChildren) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalImages = React.Children.count(children);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots
        infinite
        partialVisbile
        renderButtonGroupOutside
      >
        {React.Children.map(children, (child) => (
          <div className="cursor-pointer" onClick={openFullscreen}>
            {child}
          </div>
        ))}
      </Carousel>

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-10000"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <div className="w-2/3">{React.Children.toArray(children)[currentIndex]}</div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;

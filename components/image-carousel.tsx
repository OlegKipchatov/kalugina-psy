"use client";

import React, { PropsWithChildren, useState } from "react";
import Carousel from "react-multi-carousel";

const ImageCarousel = ({ children }: PropsWithChildren) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        infinite
        partialVisbile
        renderButtonGroupOutside
        showDots
        responsive={responsive}
      >
        {React.Children.map(children, (child, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div className="cursor-pointer" onClick={() => openFullscreen(index)}>
            {child}
          </div>
        ))}
      </Carousel>

      {isFullscreen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-10000"
          onClick={closeFullscreen}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeFullscreen}
          >
            &times;
          </button>
          <div className="w-2/3">
            {React.Children.toArray(children)[currentIndex]}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;

"use client";

import React, { useState, useEffect } from "react";
import CarouselItem, { CarouselItemInterface } from "./CarouselItem";
import Image from "next/image";
import ChevronRight from "../../assets/chevron_right.png";

const ITEM_WIDTH_DESKTOP = 358; // Width of each carousel item in pixels
const PADDING = 14; // Padding on each side
const GAP = 8; // Gap between items
export const BREAKPOINT = 768; // MD breakpoint

const Carousel = ({ list }: { list: CarouselItemInterface[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0); // Store the calculated item width

  useEffect(() => {
    // Calculate item width based on the window size minus padding
    const handleResize = () => {
      const width = window.innerWidth;
      setItemWidth(
        width < BREAKPOINT ? width - PADDING * 2 : ITEM_WIDTH_DESKTOP
      );
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const translateAmount = itemWidth + GAP; // Calculate translation amount

  const nextSlide = () => {
    console.log({ translateAmount });
    const newIndex = currentIndex + 1; // Move to the next item
    setCurrentIndex(Math.min(newIndex, list.length - 1)); // Prevent going out of bounds
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1; // Move to the previous item
    setCurrentIndex(Math.max(newIndex, 0)); // Prevent going out of bounds
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out gap-2"
        style={{
          transform: `translateX(-${currentIndex * translateAmount}px)`, // Use calculated translate amount
        }}
      >
        {list.map((item) => (
          <div
            className="flex-shrink-0 w-full md:w-[358px]" // Ensure full width for mobile and fixed width for md+
            key={item.id}
          >
            <CarouselItem item={item} />
          </div>
        ))}
      </div>

      <button
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-lightest rounded-[0.25rem] p-1 shadow z-10 cursor-pointer transition-all duration-300 ease-in-out ${
          currentIndex > 0 ? "opacity-1" : "opacity-0 pointer-events-none"
        } hover:opacity-85 hover:shadow-md`}
        onClick={prevSlide}
      >
        <Image
          src={ChevronRight}
          alt="Arrow left"
          className="w-6 h-6 transition-all duration-300 ease-in-out rotate-180 hover:opacity-85"
        />
      </button>

      <button
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-lightest rounded-[0.25rem] p-1 shadow z-10 cursor-pointer transition-all duration-300 ease-in-out ${
          currentIndex < list.length - 1
            ? "opacity-1"
            : "opacity-0 pointer-events-none"
        } hover:opacity-85 hover:shadow-md`}
        onClick={nextSlide}
      >
        <Image
          src={ChevronRight}
          alt="Arrow right"
          className="w-6 h-6 transition-all duration-300 ease-in-out hover:opacity-85"
        />
      </button>
    </div>
  );
};

export default Carousel;

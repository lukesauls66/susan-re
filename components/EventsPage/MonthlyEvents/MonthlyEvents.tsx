"use client";

import { urlFor } from "@/sanity/lib/image";
import { EventPageData } from "@/sanity/sanity-utils";
import { useState } from "react";

interface MonthlyEventsProps {
  eventPageData: EventPageData;
}

const MonthlyEvents = ({ eventPageData }: MonthlyEventsProps) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
      <h1 className="font-bold text-red text-xl md:text-2xl lg:text-3xl">
        Monthly Events
      </h1>
      {eventPageData.firstMonthlyEvents && eventPageData.secondMonthlyEvents ? (
        <div className="flex items-center justify-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() =>
              handleImageClick(urlFor(eventPageData.firstMonthlyEvents).url())
            }
          >
            <img
              src={urlFor(eventPageData.firstMonthlyEvents).url()}
              alt="monthly events"
              className="max-h-[30rem] transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() =>
              handleImageClick(urlFor(eventPageData.secondMonthlyEvents).url())
            }
          >
            <img
              src={urlFor(eventPageData.secondMonthlyEvents).url()}
              alt="monthly events"
              className="max-h-[30rem] transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      ) : eventPageData.firstMonthlyEvents ? (
        <div
          className="relative cursor-pointer"
          onClick={() =>
            handleImageClick(urlFor(eventPageData.firstMonthlyEvents).url())
          }
        >
          <img
            src={urlFor(eventPageData.firstMonthlyEvents).url()}
            alt="monthly events"
            className="max-h-[30rem] transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      ) : (
        <p className="font-bold text-red text-lg md:text-xl lg:text-2xl">
          No Monthly Events
        </p>
      )}
      {zoomedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleCloseZoom}
        >
          <img
            src={zoomedImage}
            alt="Zoomed monthly event"
            className="max-w-full max-h-full p-4"
          />
        </div>
      )}
    </div>
  );
};

export default MonthlyEvents;

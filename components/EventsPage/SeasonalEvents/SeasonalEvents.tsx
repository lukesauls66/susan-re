"use client";

import { urlFor } from "@/sanity/lib/image";
import { EventPageData } from "@/sanity/sanity-utils";
import { useState } from "react";

interface SeasonalEventsProps {
  eventPageData: EventPageData;
}

const SeasonalEvents = ({ eventPageData }: SeasonalEventsProps) => {
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
        Seasonal Events
      </h1>
      {eventPageData.seasonalEvents ? (
        <div
          className="relative cursor-pointer"
          onClick={() =>
            handleImageClick(urlFor(eventPageData.seasonalEvents).url())
          }
        >
          <img
            src={urlFor(eventPageData.seasonalEvents).url()}
            alt="seasonal events"
            className="max-h-[45rem] transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      ) : (
        <p>No Seasonal Events</p>
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

export default SeasonalEvents;

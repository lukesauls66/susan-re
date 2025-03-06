import { urlFor } from "@/sanity/lib/image";
import { EventPageData } from "@/sanity/sanity-utils";

interface SeasonalEventsProps {
  eventPageData: EventPageData;
}

const SeasonalEvents = ({ eventPageData }: SeasonalEventsProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>seasonal</h1>
      {eventPageData.seasonalEvents ? (
        <img
          src={urlFor(eventPageData.seasonalEvents).url()}
          alt="seasonal events"
        />
      ) : (
        <p>No Seasonal Events</p>
      )}
    </div>
  );
};

export default SeasonalEvents;

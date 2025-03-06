import { urlFor } from "@/sanity/lib/image";
import { EventPageData } from "@/sanity/sanity-utils";

interface MonthlyEventsProps {
  eventPageData: EventPageData;
}

const MonthlyEvents = ({ eventPageData }: MonthlyEventsProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Monthly Events</h1>
      {eventPageData.firstMonthlyEvents && eventPageData.secondMonthlyEvents ? (
        <div>
          <img
            src={urlFor(eventPageData.firstMonthlyEvents).url()}
            alt="monthly events"
          />
          <img
            src={urlFor(eventPageData.secondMonthlyEvents).url()}
            alt="monthly events"
          />
        </div>
      ) : eventPageData.firstMonthlyEvents ? (
        <img
          src={urlFor(eventPageData.firstMonthlyEvents).url()}
          alt="monthly events"
        />
      ) : (
        <p>No Monthly Events</p>
      )}
    </div>
  );
};

export default MonthlyEvents;

import { EventPageData } from "@/sanity/sanity-utils";
import MonthlyEvents from "./MonthlyEvents";
import SeasonalEvents from "./SeasonalEvents";

interface EventPageProps {
  eventPageData: EventPageData;
}

const EventsPage: React.FC<EventPageProps> = ({ eventPageData }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SeasonalEvents eventPageData={eventPageData} />
      <MonthlyEvents eventPageData={eventPageData} />
    </div>
  );
};

export default EventsPage;

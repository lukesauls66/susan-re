import { EventPageData } from "@/sanity/sanity-utils";
import MonthlyEvents from "./MonthlyEvents";
import SeasonalEvents from "./SeasonalEvents";

interface EventPageProps {
  eventPageData: EventPageData;
}

const EventsPage: React.FC<EventPageProps> = ({ eventPageData }) => {
  return (
    <div>
      <MonthlyEvents eventPageData={eventPageData} />
      <SeasonalEvents eventPageData={eventPageData} />
    </div>
  );
};

export default EventsPage;

import { EventPageData } from "@/sanity/sanity-utils";

interface MonthlyEventsProps {
  eventPageData: EventPageData;
}

const MonthlyEvents = ({ eventPageData }: MonthlyEventsProps) => {
  return <h1>monthly</h1>;
};

export default MonthlyEvents;

// {eventPageData.firstMonthlyEvents && eventPageData.secondMonthlyEvents ? (
//     <div></div>
//   ) : eventPageData.firstMonthlyEvents ? (
//     <div></div>
//   ) : (
//     <p>No Monthly Events</p>
//   )}

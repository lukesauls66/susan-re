import { getEventPageData, EventPageData } from "@/sanity/sanity-utils";
import EventsPage from "@/components/EventsPage";

export default async function Events() {
  const eventPageData: EventPageData = await getEventPageData();

  return <EventsPage eventPageData={eventPageData} />;
}

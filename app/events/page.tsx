import { getEventPageData, EventPageData } from "@/sanity/sanity-utils";
import EventsPage from "@/components/EventsPage";

export default async function Events() {
  const eventPageData: EventPageData = await getEventPageData();

  return (
    <div className="flex items-center justify-center p-4">
      {eventPageData ? (
        <EventsPage eventPageData={eventPageData} />
      ) : (
        <p className="font-bold text-red text-xl md:text-2xl lg:text-3xl">
          No Events
        </p>
      )}
    </div>
  );
}

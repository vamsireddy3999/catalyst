"use client";
import ShieldContainer from "@/components/ShieldContainer";
import WorkshopShowcase from "@/components/WorkshopShowcase";
import { useEffect, useState } from "react";
import {
  getAllEvents,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { Event } from "@/types";
import EventsShowcase from "@/components/EventsShowcase";

const page = () => {
  const [events, setEvents] = useState<Event[] | null | undefined>(undefined);

  useEffect(() => {
    getAllEvents({ category: "workshop", limit: 100, page: 1, query: "" })
      .then((events) => {
        setEvents(events?.data || null);
      })
      .catch((err) => {
        setEvents(null);
      });
  }, []);
  return (
    <>
      <header className="h-[90vh]  overflow-hidden flex justify-center items-center relative w-screen">
        <img
          className="absolute top-0 w-full h-full object-cover -z-40 left-0"
          src="/workshop.png"
          alt=""
        />
        <img
          src="/workshopText.png"
          className="text-6xl font-bold w-1/3 text-white font-got"
        />
      </header>
      <main className=" w-full flex py-40 relative">
        <img
          src="/comp2.png"
          alt="mother of dragon"
          className=" -z-50 absolute top-0 left-0 w-full h-full object-cover"
        />
        {events == null && (
          <h4 className="text-red-600 font-got text-center text-3xl` ">
            oops looks like there is an Error!
          </h4>
        )}
        {events && (
          <>
            <WorkshopShowcase events={events} />
          </>
        )}
      </main>
    </>
  );
};

export default page;

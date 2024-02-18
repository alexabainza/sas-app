import React from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  return (
    <>
      <h1 className="text-center text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-semibold pt-5 lg:pt-8 md:pt-6 sm:pt-4 pb-4 lg:pb-4 md:pb-3 sm:pb-2">Events</h1>
      <div className="mb-2 sm:mb-1 py-2 sm:py-1 mx-5 sm:mx-16 px-4 sm:px-1 flex flex-wrap">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      
    </>
  );
};

export default Events;

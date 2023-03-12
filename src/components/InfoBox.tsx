import React from "react";

const InfoBox = () => {
  return (
    <section className="absolute bottom-1 right-1 bg-white/80 text-center text-xs md:text-base w-56 md:w-80 z-10 p-3 md:p-6 rounded-lg shadow-md" >
      <h1 className="font-bold">Interactive Countries Map</h1>
      <p>
        The markers are designed to display information about the country. On
        hover the tooltip displays country name. On click it displays
        detailed information about the country like flag, area and population.
      </p>
    </section>
  );
};

export default InfoBox;

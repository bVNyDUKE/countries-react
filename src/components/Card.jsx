import React from "react";

export default function Card({ name, flag, capital, population, region }) {
  return (
    <article className="bg-white text-blue-955 dark:bg-blue-950 dark:text-white shadow-md rounded-md overflow-hidden hover:cursor-pointer hover:shadow-xl transition-colors ease-in-out duration-1000">
      <img className="object-cover" src={flag} alt={name} />

      <div className="h-1/2 px-5 pb-12 pt-5 clear-left">
        <h2 className="font-bold text-lg mb-3">{name}</h2>
        <div className="text-sm">
          <p>
            <span className="font-semibold">Population: </span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region: </span> {region}{" "}
          </p>
          <p>
            <span className="font-semibold">Capital: </span> {capital}{" "}
          </p>
        </div>
      </div>
    </article>
  );
}

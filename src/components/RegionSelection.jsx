import React, { useEffect } from "react";
import useDropdown from "../hooks/useDropdown";
import { ChevronDown, Cross } from "./Icons";

export default function RegionSelection({ setRegion }) {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const { triggerRef, nodeRef, show, setShow, selected, setSelected } =
    useDropdown(false);

  useEffect(() => {
    setRegion(selected);
    setShow(false);
  }, [selected]);

  return (
    <div className="w-1/2 lg:w-1/6 relative hover:cursor-pointer text-sm">
      <div
        ref={triggerRef}
        className="flex justify-between items-center rounded-md shadow-md h-16 px-5 bg-white text-blue-955 dark:bg-blue-950 dark:text-white transition-colors ease-in-out duration-1000"
      >
        <span className="whitespace-nowrap flex-grow">
          {selected === "" ? "Filter by Region" : selected}
        </span>
        {selected === "" ? <ChevronDown /> : <Cross />}
      </div>
      {show && (
        <div
          ref={nodeRef}
          className="bg-white dark:bg-blue-950 dark:text-white text-blue-960 p-6 absolute w-full mt-1 rounded-md shadow-md transition-colors ease-in-out duration-1000"
        >
          <ul className="space-y-3">
            {regions.map((region) => (
              <li
                key={region}
                className="hover:underline"
                onClick={() => setSelected(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

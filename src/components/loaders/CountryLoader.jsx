import React from "react";

export default function CountryLoader() {
  return (
    <div className="lg:flex lg:justify-start lg:space-x-10 animate-pulse">
      <div className="object-cover sm:w-[645px] sm:h-[465px] bg-gray-300" />

      <div>
        <div className="space-y-10">
          <div className="h-12 w-32 bg-gray-400 rounded-xl pt-10" />
          <div className="space-y-10 lg:flex lg:items-start lg:justify-start lg:space-x-10 lg:space-y-0">
            <div>
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
            </div>
            <div>
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
              <div className="h-6 w-32 bg-gray-400 rounded-xl mb-5" />
            </div>
          </div>
          <div>
            <div className="h-6 w-64 bg-gray-400 rounded-xl mb-5" />
            <div className="h-6 w-48 bg-gray-400 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

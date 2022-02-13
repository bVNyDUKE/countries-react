import { useQuery } from "react-query";

const twentyFourHours = 1000 * 60 * 60 * 24;

function useCountries() {
  return useQuery(
    "countries",
    async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Error querying data" + response.status);
      }
      return response.json();
    },
    { keepPreviousData: true, staleTime: twentyFourHours }
  );
}

function useCountry(code) {
  return useQuery(
    ["country", code],
    async () => {
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${code}`
      );
      if (!response.ok) {
        throw new Error("Error querying data" + response.status);
      }
      if (response.status === 404) {
        throw new Error("404 not found");
      }
      return response.json();
    },
    {
      keepPreviousData: true,
      staleTime: twentyFourHours,
      enabled: !!code,
      refetchOnWindowFocus: false,
    }
  );
}

function useCountryNames(borders) {
  return useQuery(
    ["codeCountry", borders],
    async () => {
      const response = await fetch(
        `https://restcountries.com/v2/alpha?codes=${borders.join(",")}`
      );
      if (!response.ok) {
        throw new Error("Error querying data" + response.status);
      }
      return response.json();
    },
    { keepPreviousData: true, staleTime: twentyFourHours, enabled: !!borders }
  );
}

export { useCountries, useCountry, useCountryNames };

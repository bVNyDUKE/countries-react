# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- Solution URL: [Vercel: countries-react-chi.vercel.app ](https://countries-react-chi.vercel.app/)

### Built with

- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [React](https://reactjs.org/) - JS library
- [React-query](https://react-query.tanstack.com/) - Data fetching
- [React-router](https://reactrouter.com/docs/en/v6) - Basic routing

### What I learned

Tailwind darkmode implementation is amazingly simple.

Vite is great even for react projects

React-query dependant queries are implemented only with the enabled options parameter.
Some solutions online implement a conjuction check in front of the queryKey. I found this to consistently cause a "missing queryFn" error

:x:

```js
return useQuery(
  borders && ["codeCountry", borders],
  async () => {
    //your query function
  },
  { keepPreviousData: true, staleTime: twentyFourHours }
);
```

:white_check_mark:

```js
return useQuery(
  ["codeCountry", borders],
  async () => {
    //your query function
  },
  { keepPreviousData: true, staleTime: twentyFourHours, enabled: !!borders }
);
```

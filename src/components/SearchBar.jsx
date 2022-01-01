import React, { useState } from 'react'

var timeout

export default function SearchBar({ setFilter }){
  const [searching, setSearching] = useState(false)

  function searchChange(e){
    clearTimeout(timeout)
    setSearching(true)
    setTimeout(() => {
      setFilter(e.target.value)
      setSearching(false)
    }, 1000)
  }

  return(
    <div className='bg-white dark:bg-blue-950 min-w-min w-full lg:w-1/3 h-16 flex items-center space-x-8 rounded-md shadow-md text-gray-950 dark:text-white'>

      <div className='ml-8'>
        {searching ?
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          :
          <svg
            className="h-5 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

        }

      </div>
      <input
        type="text" name="search" id="search"
        onChange={searchChange}
        placeholder='Search for a country...'
        className='flex-grow focus:outline-none dark:bg-blue-950 text-grey-950 dark:text-white'
      />

    </div>
  )
}

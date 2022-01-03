import React from 'react'
import useDropdown from '../hooks/useDropdown'

export default function RegionSelection({ setRegion }){
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const { triggerRef,
    nodeRef,
    show,
    setShow,
    selected,
    setSelected } = useDropdown(false)

  selected === '' ? setRegion('') : null

  function dropdownClick(region){
    setRegion(region)
    setSelected(region)
    setShow(false)
  }

  return(
    <div className='w-1/2 lg:w-1/6 relative hover:cursor-pointer text-sm' >
      <div ref={triggerRef} className='flex justify-between items-center rounded-md shadow-md h-16 px-5 bg-white text-blue-955 dark:bg-blue-950 dark:text-white transition-colors ease-in-out duration-1000'>
        <span className='whitespace-nowrap flex-grow' >{selected === '' ? 'Filter by Region' : selected}</span>
        {selected === '' ?
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        }
      </div>
      { show &&
      <div ref={nodeRef} className='bg-white dark:bg-blue-950 dark:text-white text-blue-960 p-6 absolute w-full mt-1 rounded-md shadow-md transition-colors ease-in-out duration-1000'>
        <ul className='space-y-3'>
          {regions.map(r => <li key={r} className='hover:underline' onClick={() => dropdownClick(r)}> {r} </li>)}
        </ul>
      </div>
      }
    </div>
  )
}

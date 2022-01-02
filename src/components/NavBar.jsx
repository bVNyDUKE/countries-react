import React from 'react'
import { Link } from 'react-router-dom'

function DarkModeIcon(){
  const toggleDarkMode = () => {
    let root = document.documentElement.classList
    if(root.contains('dark')){
      root.remove('dark')
    }else{
      root.add('dark')
    }
  }

  return (
    <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 hover:cursor-pointer dark:text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function NavBar(){

  return(
    <nav className='p-6  bg-white dark:bg-blue-950'>
      <div className='flex justify-between items-center container m-auto'>
        <Link to="/">
          <h1 className='text-xl font-bold text-blue-955 dark:text-white'>
          Where in the world?
          </h1>
        </Link>
        <div className='font-semibold flex justify-start dark:text-white'>
          <DarkModeIcon />
          Dark Mode
        </div>
      </div>
    </nav>
  )
}

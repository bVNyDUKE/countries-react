import React from 'react'

export default function CardLoader(){
  return(
    <article className='bg-white text-blue-955 dark:bg-blue-950 dark:text-white shadow-md rounded-md overflow-hidden hover:cursor-pointer hover:shadow-xl animate-pulse'>

      <div className='md:w-[365px] md:h-[256px] float-left bg-gray-400' />

      <div className='h-1/2 px-5 pb-12 pt-5 clear-left'>
        <div className='h-8 w-36 bg-gray-400 mb-6 rounded-xl' />
        <div className='text-sm space-y-3'>
          <div className='h-6 w-28 bg-gray-400 rounded-xl' />
          <div className='h-6 w-24 bg-gray-400 rounded-xl' />
          <div className='h-6 w-24 bg-gray-400 rounded-xl' />
        </div>
      </div>
    </article>
  )
}


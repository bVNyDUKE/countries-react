import React from 'react'

export default function Card({ name, flag, capital, population, region }){
  return(
    <article className='bg-white text-blue-955 dark:bg-blue-950 dark:text-white shadow-md rounded-md overflow-hidden hover:cursor-pointer hover:shadow-xl'>

      <img className='object-cover md:w-[365px] md:h-[256px] float-left' src={flag} />

      <div className='h-1/2 px-5 pb-12 pt-5 clear-left'>
        <p className='font-bold text-lg mb-3'>{name}</p>
        <div className='text-sm'>
          <p><span className='font-semibold'>Population: </span> {population.toLocaleString()}</p>
          <p><span className='font-semibold'>Region: </span> {region} </p>
          <p><span className='font-semibold'>Capital: </span> {capital} </p>
        </div>
      </div>
    </article>
  )
}

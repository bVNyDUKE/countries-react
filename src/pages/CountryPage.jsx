import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCountry, useCountryNames } from '../api/Countries'
import CountryLoader from '../components/loaders/CountryLoader'

export default function CountryPage(){
  let { code } = useParams()
  const { isLoading, error, data } = useCountry(code)
  const borders = data?.borders
  const { isLoading: namesIsLoading, error: namesError, data: nameData } = useCountryNames(borders)

  return (
    <div className='container m-auto mt-5 sm:mt-10 p-10 text-blue-955 dark:text-white'>

      <div className='mb-20'>

        <button onClick={() => history.back() } className='flex justify-center items-center bg-white text-blue-955 dark:bg-blue-950 dark:text-gray-400 w-32 p-2 space-x-2 rounded-sm shadow-2xl'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-955 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <div className='font-semibold'>Back</div>
        </button>

      </div>

      {
        isLoading ?
          <CountryLoader />
          : error ? (<p>Error {error.message}</p>)
            :
            (
              <div className='lg:flex lg:justify-start lg:space-x-10'>
                <img className='object-cover sm:w-[645px] sm:h-[465px] float-left' src={data.flags.svg} />

                <div className='clear-left'>
                  <div className='space-y-10'>
                    <h1 className='text-3xl font-bold pt-10'>{data.name}</h1>
                    <div className='space-y-10 lg:flex lg:items-start lg:justify-start lg:space-x-10 lg:space-y-0'>
                      <div>
                        <p><span className='font-semibold'>Native Name: </span>{data.nativeName}</p>
                        <p><span className='font-semibold'>Population: </span>{data.population.toLocaleString()}</p>
                        <p><span className='font-semibold'>Region: </span>{data.region}</p>
                        <p><span className='font-semibold'>Sub Region: </span>{data.subregion}</p>
                        <p><span className='font-semibold'>Capital: </span>{data.capital}</p>
                      </div>
                      <div>
                        <p><span className='font-semibold'>Top Level Domain: </span>{data.topLevelDomain[0]}</p>
                        <p><span className='font-semibold'>Currencies: </span>{data.currencies[0].name}</p>
                        <p><span className='font-semibold'>Languages: </span>{data.languages.reduce((prev, next) => [...prev, next.name], []).join(', ')}</p>
                      </div>
                    </div>
                    <div>
                      <h2 className='text-xl font-bold mb-5'>Border Countries:</h2>
                      {
                        !Object.keys(data).includes('borders') ? (<div className='flex items-center'>No neighbor data</div>)
                          : namesIsLoading ? 'Loading....'
                            : namesError ? (<div className='flex items-center'>Error {error.message}</div>)
                              :
                              <div className='grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
                                {nameData.map( b =>
                                  <Link key={b.name} to={`/${b.alpha3Code}`} as='button'
                                    className='bg-white text-blue-955 dark:bg-blue-950 dark:text-gray-400 w-26 md:w-32 p-2 truncate rounded-sm shadow-2xl'>
                                    {b.name}</Link>
                                )}
                              </div>
                      }
                    </div>
                  </div>

                </div>
              </div>
            )
      }
    </div>
  )
}
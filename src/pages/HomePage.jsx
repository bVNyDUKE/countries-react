import React, { useState } from 'react'
import Card from '../components/Card'
import CardLoader from '../components/loaders/CardLoader'
import SearchBar from '../components/SearchBar'
import RegionSelection from '../components/RegionSelection'
import { useCountries } from '../api/Countries'
import { Link } from 'react-router-dom'

export default function CountriesGrid(){
  const { isLoading, error, data } = useCountries()
  const [filter, setFilter] = useState('')
  const [region, setRegion] = useState('')

  let filtered = []
  filter !== '' ?  filtered = data.filter(country => country.name.official.toLowerCase().includes(filter.toLowerCase())) : filtered = data
  region !== '' ? filtered = filtered.filter(country => country.region.includes(region)) : null

  return(
    <>
      <div className='lg:flex px-5 sm:px-0 justify-between items-center mt-10 container m-auto space-y-10 lg:space-y-0'>
        <SearchBar setFilter={setFilter}/>
        <RegionSelection setRegion={setRegion} />
      </div>

      <div className='grid px-10 sm:px-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 items-stretch mt-10 container m-auto text-blue-960 dark:text-white '>
        {
          isLoading ?  [0,1,2,3,4,5,6,7].map( x => <CardLoader key={x} />)
            : error ? `Error ${error.message}`
              :
              filtered.map( c =>
                <Link
                  to={`/${c.cca3}`}
                  key={`link-${c.name.common}`}
                >
                  <Card
                    key={c.name.official}
                    flag={c.flags.svg}
                    name={c.name.official}
                    capital={c.capital}
                    population={c.population}
                    region={c.region} />
                </Link>)
        }
      </div>
    </>
  )
}



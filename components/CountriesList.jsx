import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'


export default function CountriesList({ query }) {

  const [countriesData, setCountriesData] = useState([])


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])

  const filterList = countriesData.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))

  const clickHandler = () => {
    setCountriesData([])
  }

  if (countriesData.length === 0) {
    return <CountriesListShimmer />
  } else {
    return (
      <div className="countries-container">
        {filterList.map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          )
        })}
      </div>

    )
  }


}

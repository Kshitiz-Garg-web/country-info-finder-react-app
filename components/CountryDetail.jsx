import React, { useEffect, useState } from 'react'
import './CountryDetail.css'
import { useParams } from 'react-router-dom'
import LoadingEffect from './LoadingEffect'
import CountryNotFound from './CountryNotFound'

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get('name')
  const params = useParams()
  const countryName = params.Country

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data)
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
          
        })
      }).catch((err)=>{
        setNotFound(true)
      })
  }, [])

  if(notFound){
    return <CountryNotFound />
  }
  return countryData === null ? (
    <LoadingEffect />
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
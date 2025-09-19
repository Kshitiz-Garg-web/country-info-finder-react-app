import React from 'react'
import "./CountryDetailShimmer.css"

function CountryDetaileShimmer() {
  return (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details country-details-shimmer ">
          <div className='img' />
          <div className="details-text-container">
            <h1></h1>
            <div className="details-text">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className="border-countries">
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default CountryDetaileShimmer



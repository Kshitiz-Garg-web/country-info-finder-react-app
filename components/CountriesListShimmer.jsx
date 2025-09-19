import React from 'react'
import "./CountriesListShimmer.css"

function CountriesListShimmer() {
  // // way1 to create a empty array
  // const arr = new Array(10);
  // arr.fill('')
  // console.log(arr)

  // way1 to create a empty array
  const arr = Array.from({length:15})
  // console.log(arr) 
  const shimercountarr = arr.map((item,idx)=>{
    return (<a key={idx} className="country-card shimmer-card" href="#">
       <div className="img"></div>
        <div className="card-text">
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </a>)
  
  })

  return (
    <div className="countries-container">
      {
        shimercountarr
      }
    </div>
  )
}

export default CountriesListShimmer
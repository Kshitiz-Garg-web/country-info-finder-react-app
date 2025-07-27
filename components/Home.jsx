import { useState } from "react"

import SearchBar from '../components/SearchBar'
import SelectMenu from '../components/SelectMenu'
import CountriesList from '../components/CountriesList'



export default function Home() {
   const [query,setQuery] = useState("")
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}  />
          <SelectMenu/>
        </div>
        <CountriesList  query={query} />
      </main>
    </>
  )
}



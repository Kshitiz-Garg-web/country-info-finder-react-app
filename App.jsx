import { useState } from "react"
import NavBar from "./components/NavBar"
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'

import './App.css'

const App = () => {
   const [query,setQuery] = useState("")
  return (
    <>
      <NavBar />
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

export default App

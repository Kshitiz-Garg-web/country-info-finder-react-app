import { useEffect, useState } from "react"

import SearchBar from '../components/SearchBar'
import SelectMenu from '../components/SelectMenu'
import CountriesList from '../components/CountriesList'
import { useOutletContext } from "react-router-dom"
import { useWindowSize } from "../hook/useWindowSize"

export default function Home() {
  const [query, setQuery] = useState("")
  const [isDark] = useOutletContext()
  const windowSize = useWindowSize()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(true)

    // ek hi timer rakho, purana clear karo
    const timer = setTimeout(() => {
      setIsShow(false)
    }, 1500)

    return () => clearTimeout(timer) // cleanup
  }, [windowSize]) // jab bhi windowSize change ho, effect chalega

  // console.log(isDark)
  // console.log('first')
  return (

    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
         {isShow == true ? <h1 className="windowSize" style={{ textAlign: "center" }}>{windowSize.width} X {windowSize.height}</h1> : ""}
      </div>
      <CountriesList query={query} />
    </main>
  )
}


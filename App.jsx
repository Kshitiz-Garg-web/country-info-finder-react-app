import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

import './App.css'
import { useState } from "react"

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
      <NavBar theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
      {/* context property */}
    </>
  )
}

export default App

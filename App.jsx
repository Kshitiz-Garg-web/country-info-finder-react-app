import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App

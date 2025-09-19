import { useState } from "react";
import { PiMoonFill } from "react-icons/pi";
import { BsSun } from "react-icons/bs";


export default function NavBar({theme}) {
  const [isDark, setIsDark] = theme;
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  // if(isDark){
  //    document.body.classList.add('dark');
  // }else{
  //    document.body.classList.remove('dark');
  // }

  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          {isDark == true ? <BsSun /> : <PiMoonFill />}
          {isDark == true ? <span>&nbsp;&nbsp;Light Mode</span> : <span>&nbsp;&nbsp;Dark Mode</span>}

        </p>
      </div>
    </header>
  )
}

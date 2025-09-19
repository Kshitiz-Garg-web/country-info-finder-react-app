
import { useOutletContext } from "react-router-dom";
import "./CountryNotFound.css"

const CountryNotFound = ({ countryName = "" }) => {
   const [isDark] = useOutletContext()
  return (
    <main className={`notfound ${isDark==true?"dark":""}`}>
      <div className="icon">🌍❌</div>
      <h2>Country Not Found</h2>
      <p>
        Sorry, we couldn't find any data for <b>{countryName}</b>.
      </p>
      <p>Please check the spelling and try again.</p>
    </main>
  );
};

export default CountryNotFound;

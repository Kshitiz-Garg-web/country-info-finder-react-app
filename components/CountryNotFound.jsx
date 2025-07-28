const CountryNotFound = ({ countryName = "" }) => {
  return (
    <div>
      <div>🌍❌</div>
      <h2>Country Not Found</h2>
      <p>Sorry, we couldn't find any data for <b>{countryName}</b>.</p>
      <p>Please check the spelling and try again.</p>
    </div>
  );
};

export default CountryNotFound;

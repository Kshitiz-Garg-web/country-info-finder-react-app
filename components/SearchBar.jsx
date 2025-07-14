export default function SearchBar({setQuery}) {
  const changeHandler = (e) => {
    setQuery(e.target.value.toLowerCase())
  }
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" onChange={changeHandler} placeholder="Search for a country..." />
    </div>
  )
}

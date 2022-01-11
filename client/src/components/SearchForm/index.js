import "./index.css";

const SearchForm = () => {
  return (
    <form className="searchForm">
      <div className="searchForm__div">
        <input
          type="search"
          className="searchField"
          name="q"
          placeholder="Enter song or artist name"
        />
        <button className="searchButton">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;

import "./styles.css";

const InputField = ({ searchParams, setSearchParams }) => {
  const handleInputChange = (event) => {
    let query = event.target.value;
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <input
      type="search"
      className="searchField"
      name="q"
      placeholder="Enter song or artist name"
      value={searchParams.get("query") || ""}
      onChange={handleInputChange}
    />
  );
};

export default InputField;

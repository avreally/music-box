import "./styles.css";

const InputField = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="search"
      className="searchField"
      name="q"
      placeholder="Enter song or artist name"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default InputField;

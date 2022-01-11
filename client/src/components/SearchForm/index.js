import "./index.css";
import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const readSearchInput = (event) => {
    event.preventDefault();
    console.log("submitted", searchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={readSearchInput} className="searchForm">
      <div className="searchForm__div">
        <InputField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Button />
      </div>
    </form>
  );
};

export default SearchForm;

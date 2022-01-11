import "./styles.css";
import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import axios from "axios";

// Base url for request to the server
const baseUrl = "http://localhost:3001/api/song";

const SearchForm = ({ setSongData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const readSearchInput = (event) => {
    event.preventDefault();
    return searchQuery;
  };

  // Request to the server, passing user search request
  const getSong = (userSearchRequest) => {
    return axios
      .get(`${baseUrl}?search=${userSearchRequest}`)
      .then((response) => {
        return response.data;
      });
  };

  const searchForSong = (event) => {
    const value = readSearchInput(event);
    getSong(value).then((result) => {
      setSongData(result);
    });
    setSearchQuery("");
  };

  return (
    <form onSubmit={searchForSong} className="searchForm">
      <div className="searchForm__div">
        <InputField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Button />
      </div>
    </form>
  );
};

export default SearchForm;

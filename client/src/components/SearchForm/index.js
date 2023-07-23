import "./styles.css";
import Button from "../Button";
import InputField from "../InputField";
import axios from "axios";
import { useEffect } from "react";

// Base url for request to the server
const baseUrl = "/api/song";

const SearchForm = ({
  setSongData,
  setSearchParams,
  searchQuery,
  setSearchQuery,
  setIsLoading,
}) => {
  useEffect(() => {
    checkSearchQuery();
  }, []);

  const checkSearchQuery = () => {
    if (searchQuery) {
      getSong(searchQuery).then((result) => {
        setSongData(result);
      });
    }
  };

  // Putting user request to URL
  const updateSearchParams = (query) => {
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
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
    event.preventDefault();
    setIsLoading(true);
    updateSearchParams(searchQuery);
    getSong(searchQuery).then((result) => {
      setIsLoading(false);
      setSongData(result);
    });
  };

  return (
    <form onSubmit={searchForSong} className="searchForm">
      <InputField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Button buttonName="Search" className="button searchButton" />
    </form>
  );
};

export default SearchForm;

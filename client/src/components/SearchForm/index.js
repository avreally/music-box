import "./styles.css";
import Button from "../Button";
import InputField from "../InputField";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

// Base url for request to the server
const baseUrl = "http://localhost:3001/api/song";

const SearchForm = ({ setSongData }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const readSearchInput = (event) => {
    event.preventDefault();
    return searchParams.get("query");
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
  };

  return (
    <form onSubmit={searchForSong} className="searchForm">
      <div className="searchForm__div">
        <InputField
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <Button />
      </div>
    </form>
  );
};

export default SearchForm;

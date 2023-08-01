import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Heading from "./components/Heading";
import SearchForm from "./components/SearchForm";
import SongData from "./components/SongData";
import Player from "./components/Player";
import Button from "./components/Button";

function App() {
  const [songData, setSongData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );
  const [copyUrlButtonName, setCopyUrlButtonName] = useState("Copy song URL");
  const [isLoading, setIsLoading] = useState(false);

  const goToHomePage = () => {
    setSongData(undefined);
    setSearchQuery("");
  };

  const handleCopySongUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        setCopyUrlButtonName("Copied!");
        setTimeout(() => {
          setCopyUrlButtonName("Copy song URL");
        }, 3000);
      }
    );
  };

  return (
    <main className="main">
      <div className="container">
        <Link to="/" className="heading">
          <Heading onClick={goToHomePage} />
        </Link>
        <SearchForm
          setSongData={setSongData}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsLoading={setIsLoading}
        />
        <div className="resultContainer">
          {isLoading === true ? (
            <h2 className="loadingText">Loading...</h2>
          ) : songData !== undefined ? (
            <>
              <SongData songData={songData} />
              <Button
                buttonName={copyUrlButtonName}
                onClick={handleCopySongUrl}
                className="button copyUrlButton"
              />
              <Player songData={songData} />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;

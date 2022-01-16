import Heading from "./components/Heading";
import SearchForm from "./components/SearchForm";
import SongData from "./components/SongData";
import Player from "./components/Player";
import { useState } from "react";
import Button from "./components/Button";
import { useSearchParams, Link } from "react-router-dom";

function App() {
  const [songData, setSongData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );

  const goToHomePage = () => {
    setSongData(undefined);
    setSearchQuery("");
  };

  const handleCopySongUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        console.log("copied");
      },
      () => {
        console.log("failed");
      }
    );
  };

  return (
    <main className="main">
      <div className="container">
        <Link to="/">
          <Heading onClick={goToHomePage} />
        </Link>
        <SearchForm
          setSongData={setSongData}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="resultContainer">
          {songData !== undefined ? (
            <>
              <SongData songData={songData} />
              <Player songData={songData} />
              <Button buttonName="Copy song URL" onClick={handleCopySongUrl} />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;

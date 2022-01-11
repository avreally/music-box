import Heading from "./components/Heading";
import SearchForm from "./components/SearchForm";
import SongData from "./components/SongData";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [songData, setSongData] = useState();

  return (
    <main className="main">
      <div className="container">
        <Heading />
        <SearchForm setSongData={setSongData} />
        <div className="resultContainer">
          {songData !== undefined ? (
            <>
              <SongData songData={songData} />
              <Player songData={songData} />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;

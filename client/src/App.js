import Heading from "./components/Heading";
import SearchForm from "./components/SearchForm";
import SongData from "./components/SongData";
import Player from "./components/Player";

function App() {
  return (
    <main className="main">
      <div className="container">
        <Heading />
        <SearchForm />
        <div className="resultContainer">
          <SongData />
          <Player />
        </div>
      </div>
    </main>
  );
}

export default App;

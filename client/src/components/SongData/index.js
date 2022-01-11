import "./index.css";
import AlbumCover from "../AlbumCover";
import SongTitleAndName from "../SongTitleAndName";

const SongData = () => {
  return (
    <div className="songDataContainer">
      <AlbumCover />
      <SongTitleAndName />
    </div>
  );
};

export default SongData;

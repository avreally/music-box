import "./styles.css";
import AlbumCover from "../AlbumCover";
import SongTitleAndName from "../SongTitleAndName";

const SongData = ({ songData }) => {
  return (
    <div className="songDataContainer">
      <AlbumCover songData={songData} />
      <SongTitleAndName songData={songData} />
    </div>
  );
};

export default SongData;

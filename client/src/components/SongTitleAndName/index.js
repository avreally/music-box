import "./styles.css";

const SongTitleAndName = ({ songData }) => {
  return (
    <div className="songTitleAndNameContainer">
      <h2 className="songTitle">{songData.title}</h2>
      <div className="artistName">{songData.artist}</div>
      <div>{songData.releaseDate}</div>
    </div>
  );
};

export default SongTitleAndName;

import "./styles.css";

const SongTitleAndName = ({ songData }) => {
  return (
    <div className="songTitleAndNameContainer">
      <h2 className="songTitle">{songData.title}</h2>
      <h3 className="artistName">{songData.artist}</h3>
    </div>
  );
};

export default SongTitleAndName;

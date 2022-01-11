import "./styles.css";

const AlbumCover = ({ songData }) => {
  return (
    <div className="albumImgContainer">
      <img className="albumImg" src={songData.songImgUrl} alt="album-cover" />
    </div>
  );
};

export default AlbumCover;

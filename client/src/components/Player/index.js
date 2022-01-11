import "./styles.css";

const Player = ({ songData }) => {
  return (
    <iframe
      className="iFrame"
      title="Apple music player"
      src={`https://genius.com/songs/${songData.songId}/apple_music_player`}
    >
      Player
    </iframe>
  );
};

export default Player;

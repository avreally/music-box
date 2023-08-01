import "./styles.css";

const Player = ({ songData }) => {
  return (
    <div className="playerContainer">
      <iframe
        className="iFrame"
        title="Apple music player"
        allow="encrypted-media"
        src={`https://genius.com/songs/${songData.songId}/apple_music_player?react=1`}
      >
        Player
      </iframe>
    </div>
  );
};

export default Player;

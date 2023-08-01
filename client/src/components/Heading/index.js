import "./styles.css";
import { ReactComponent as MusicBox } from "../../assets/music-box.svg";

const Heading = ({ onClick }) => {
  return (
    <MusicBox className="musicBox neonlight--pink" onClick={onClick}/>
  );
};

export default Heading;

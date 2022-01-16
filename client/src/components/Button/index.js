import "./styles.css";

const Button = ({ buttonName, onClick }) => {
  return (
    <button className="searchButton" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;

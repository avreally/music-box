import "./index.css";
import Button from "../Button";
import InputField from "../InputField";

const SearchForm = () => {
  return (
    <form className="searchForm">
      <div className="searchForm__div">
        <InputField />
        <Button />
      </div>
    </form>
  );
};

export default SearchForm;

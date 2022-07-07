import { MenuItem } from "../../../data";
import "./search-button.scss";

const Search = (props: MenuItem) => {
  return (
    <button className="navigation__button--search">
      <img src={props.buttonSearchPath} alt={props.searchAltTag} />
    </button>
  );
};

export default Search;

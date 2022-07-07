import { MenuItem } from "../../../data";
import "./search-button.scss";

const Search = ({ buttonSearchPath, searchAltTag }: MenuItem) => {
  return (
    <button className="navigation__button--search">
      <img src={buttonSearchPath} alt={searchAltTag} />
    </button>
  );
};

export default Search;

import "../menu/menu.scss";
import { MenuData } from "../../../data";
import Search from "../../Attoms/search-button/search-button";
import FeaturesNext from "../../Attoms/features-next-button/features-next";

const Menu = (props: MenuData) => {
  return (
    <div className="navigation__menu">
      <div className="navigation__menu--scroll">
        {props.menu.map((post, index) => {
          return (
            <li
              key={index}
              className={`navigation__item ${
                post.isSubMenu
                  ? "navigation__item--features"
                  : post.title === "Search"
                  ? "navigation__item--search"
                  : ""
              }`}
            >
              {post.title === "Search" ? (
                <>
                  <input
                    className="navigation__input--search"
                    placeholder={post.title}
                  />
                  <Search
                    buttonSearchPath={post.buttonSearchPath}
                    searchAltTag={post.searchAltTag}
                  />
                </>
              ) : post.title === "Features" ? (
                <div className="navigation__item--features">
                  <a className="navigation__link" href={post.url}>
                    {post.title}
                  </a>
                  <FeaturesNext
                    buttonNextPath={post.buttonNextPath}
                    buttonNextAltTag={post.buttonNextAltTag}
                  />
                </div>
              ) : (
                <a className="navigation__link" href={post.url}>
                  {post.title}
                </a>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

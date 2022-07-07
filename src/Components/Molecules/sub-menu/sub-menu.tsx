import "../sub-menu/sub-menu.scss";
import { BackButtonTitle, MenuData } from "../../../data";
import SubMenuBack from "../../Atoms/subMenu-back-button/submenu-back";

const SubMenu = (props: MenuData & BackButtonTitle) => {
  return (
    <div className="sub-navigation">
      <div className="sub-navigation__item--back" onClick={props.closeSubMenu}>
        <div>
          <SubMenuBack
            buttonBackPath={props.buttonBackPath}
            buttonBackAltTag={props.buttonBackAltTag}
          />
        </div>
        <p className="sub-navigation__text--back" onClick={props.closeSubMenu}>
          {props.title}
        </p>
      </div>
      {props.menu.map((post, menuIndex) => {
        return typeof post.subMenu == "object" ? (
          <div key={menuIndex}>
            {post.subMenu.map((post, subMenuIndex) => (
              <div className="sub-navigation__item" key={subMenuIndex}>
                <p className="sub-navigation__text">{post.title}</p>
              </div>
            ))}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SubMenu;

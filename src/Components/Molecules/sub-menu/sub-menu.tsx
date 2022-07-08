import "./sub-menu.scss";
import SubMenuBack from "../../atoms/submenu-back-button/submenu-back";
import { BackButtonTitle, MenuData } from "../../../data";
interface SubMenuProps {
  menuData: MenuData;
  backButton: BackButtonTitle;
}

const SubMenu = (props: SubMenuProps) => {
  return (
    <div className="sub-navigation">
      <div
        className="sub-navigation__item--back"
        onClick={props.menuData.closeSubMenu}
      >
        <div>
          <SubMenuBack
            buttonBackPath={props.backButton.buttonBackPath}
            buttonBackAltTag={props.backButton.buttonBackAltTag}
          />
        </div>
        <p
          className="sub-navigation__text--back"
          onClick={props.menuData.closeSubMenu}
        >
          {props.backButton.title}
        </p>
      </div>
      {props.menuData.menu.map((post, menuIndex) => {
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

import { BackButtonTitle } from "../../../data";
import "../subMenu-back-button/submenu-back.scss";

const SubMenuBack = (props: BackButtonTitle) => {
  return (
    <button className="sub-navigation__button--back">
      <img src={props.buttonBackPath} alt={props.buttonBackAltTag} />
    </button>
  );
};

export default SubMenuBack;
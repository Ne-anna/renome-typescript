import { BackButtonTitle } from "../../../data";
import "./submenu-back.scss";

const SubMenuBack = ({ buttonBackPath, buttonBackAltTag }: BackButtonTitle) => {
  return (
    <button className="sub-navigation__button--back">
      <img src={buttonBackPath} alt={buttonBackAltTag} />
    </button>
  );
};

export default SubMenuBack;

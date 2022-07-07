import "./features-next.scss";
import { MenuItem } from "../../../data";

const FeaturesNext = (props: MenuItem) => {
  return (
    <button className="navigation__button--features">
      <img src={props.buttonNextPath} alt={props.buttonNextAltTag} />
    </button>
  );
};

export default FeaturesNext;

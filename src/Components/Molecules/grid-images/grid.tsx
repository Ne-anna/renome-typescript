import "./grid.scss";
import { Images } from "../../../data";

const Grid = (props: Images) => {
  return (
    <div className="about__image-grid">
      <img
        className="about__back-image"
        src={props.top}
        alt={props.altTagBack}
      />
      <img
        className="about__front-image"
        src={props.bottom}
        alt={props.altTagFront}
      />
    </div>
  );
};

export default Grid;

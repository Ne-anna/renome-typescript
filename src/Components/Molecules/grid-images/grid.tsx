import "../grid-images/grid.scss";

interface GridData {
  topImage: string;
  backImage: string;
  altTagBack: string;
  altTagFront: string;
}

const Grid = (props: GridData) => {
  return (
    <div className="about__image-grid">
      <img
        className="about__back-image"
        src={props.topImage}
        alt={props.altTagBack}
      />
      <img
        className="about__front-image"
        src={props.backImage}
        alt={props.altTagFront}
      />
    </div>
  );
};

export default Grid;

import { CarouselButtons } from "../../../data";
import "../carousel-next-button/carousel-next-button.scss";

const CarouselPreviousButton = (props: CarouselButtons) => {
  return (
    <button className="carousel__button" onClick={props.previousSlide}>
      <img src={props.carouselButtonPrevious} alt={props.altTagPrevious} />
    </button>
  );
};

export default CarouselPreviousButton;

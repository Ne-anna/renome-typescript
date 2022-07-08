import { CarouselButton } from "../../../data";
import "../carousel-next-button/carousel-next-button.scss";

const CarouselPreviousButton = (props: CarouselButton) => {
  return (
    <button className="carousel__button" onClick={props.loadPreviousSlide}>
      <img src={props.carouselButtonPrevious} alt={props.altTagPrevious} />
    </button>
  );
};

export default CarouselPreviousButton;

import { CarouselButton } from "../../../data";
import "../carousel-next-button/carousel-next-button.scss";

const CarouselNextButton = (props: CarouselButton) => {
  return (
    <button
      className="carousel__button"
      onClick={props.loadNextSlide}
      data-testid="left-button"
    >
      <img src={props.carouselButtonNext} alt={props.altTagNext} />
    </button>
  );
};

export default CarouselNextButton;

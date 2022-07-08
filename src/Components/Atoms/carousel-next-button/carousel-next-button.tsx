import { CarouselButtons } from "../../../data";
import "../carousel-next-button/carousel-next-button.scss";

const CarouselNextButton = (props: CarouselButtons) => {
  return (
    <button className="carousel__button" onClick={props.nextSlide}>
      <img src={props.carouselButtonNext} alt={props.altTagNext} />
    </button>
  );
};

export default CarouselNextButton;

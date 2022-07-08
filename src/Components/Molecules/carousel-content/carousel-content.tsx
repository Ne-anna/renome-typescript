import "../carousel-content/carousel-content.scss";
import { CarouselData } from "../../../data";

const CarouselContent = (props: CarouselData) => {
  return (
    <div className="carousel__container">
      {props.carousel.map((post, index) => {
        return (
          <div
            className={`carousel__item ${
              index < 1 && props.blockAnimation
                ? "carousel__animation--blocked"
                : props.slideIndex === index + 1
                ? "active-" + props.slideDirection
                : props.prevSlide === index + 1
                ? "carousel__item--" + props.slideDirection
                : "carousel__animation--active"
            } `}
            key={index}
          >
            <div
              className={`carousel__text ${
                index < 1 && props.blockAnimation
                  ? "carousel__animation--blocked"
                  : props.slideIndex === index + 1
                  ? "active__text-" + props.slideDirection
                  : "carousel__animation--active"
              } `}
            >
              <h2 className="carousel__title">{post.title}</h2>
              <h5 className="carousel__subtitle">{post.subTitle}</h5>
            </div>
            <div className="carousel__image">
              <img src={post.path} alt={post.altTag} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselContent;

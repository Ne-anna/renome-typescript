import "../carousel/carousel.scss";
import CarouselContent from "../../molecules/carousel-content/carousel-content";
import CarouselPreviousButton from "../../atoms/carousel-previous-button/carousel-previous-button";
import CarouselNextButton from "../../atoms/carousel-next-button/carousel-next-button";
import { CarouselButton, CarouselData } from "../../../data";
import jsonFile from "../../../db.json";
import { useState } from "react";

interface CarouselProps {
  carouselData: CarouselData;
  carouselButtonData: CarouselButton;
}

enum SlideDirections {
  current = "current",
  right = "right",
  left = "left",
}
const Carousel = (props: CarouselProps) => {
  const carousel = jsonFile.carousel;

  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [slideDirection, setSlideDirection] = useState<SlideDirections>(
    SlideDirections.current
  );
  const [prevSlide, setPrevSlide] = useState<number>(carousel.length);
  const [blockedAnimation, setBlockedAnimation] = useState<boolean>(true);

  const loadNextSlide = () => {
    setSlideDirection(SlideDirections.right);
    setBlockedAnimation(false);
    if (slideIndex !== carousel.length) {
      setSlideIndex(slideIndex + 1);
      setPrevSlide(slideIndex);
    } else if (slideIndex === carousel.length) {
      setSlideIndex(1);
      setPrevSlide(carousel.length);
    }
  };

  const loadPreviousSlide = () => {
    setSlideDirection(SlideDirections.left);
    setBlockedAnimation(false);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      setPrevSlide(slideIndex);
    } else if (slideIndex === 1) {
      setSlideIndex(carousel.length);
      setPrevSlide(1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__slider">
        <CarouselContent
          carousel={props.carouselData.carousel}
          slideIndex={slideIndex}
          slideDirection={slideDirection}
          prevSlide={prevSlide}
          blockAnimation={blockedAnimation}
        />
      </div>
      <div className="carousel__navigation">
        <CarouselPreviousButton
          loadPreviousSlide={loadPreviousSlide}
          carouselButtonPrevious={
            props.carouselButtonData.carouselButtonPrevious
          }
          altTagPrevious={props.carouselButtonData.altTagPrevious}
        />
        <CarouselNextButton
          loadNextSlide={loadNextSlide}
          carouselButtonNext={props.carouselButtonData.carouselButtonNext}
          altTagNext={props.carouselButtonData.altTagNext}
        />
      </div>
    </div>
  );
};

export default Carousel;

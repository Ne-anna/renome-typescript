import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarouselNextButton from "./carousel-next-button";

test("check my button", async () => {
  const buttonData = {
    carouselButtonNext: "next",
    altTagNext: "this next",
    carouselButtonPrevious: "what",
    altTagPrevious: "wdm",
    loadPreviousSlide: jest.fn(),
    loadNextSlide: jest.fn(),
  };
  render(<CarouselNextButton {...buttonData} />);
  const forwardButton = screen.getByTestId("left-button");
  expect(forwardButton).toBeInDocument();

  // screen.debug(screen.getByTestId("left-button"));
});

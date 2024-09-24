import "./MainPage.scss";
import {Fragment} from "react";
import SliderLanding from "../SliderLanding/SliderLanding";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import TeachersCards from "../TeachersCards/TeachersCards.jsx";

export default function MainPage() {
  return (
    <Fragment>
      <SliderLanding></SliderLanding>
      <TeachersCards />
      <ReviewSlider />
    </Fragment>
  );
}

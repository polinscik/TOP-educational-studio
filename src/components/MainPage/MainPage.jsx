import "./MainPage.scss";
import {Fragment} from "react";
import SliderLanding from "../SliderLanding/SliderLanding";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import TeachersCards from "../TeachersCards/TeachersCards.jsx";
import CourseCards from "../CourseCards/CourseCards";

export default function MainPage() {
  return (
    <div style={{backgroundColor: "#0f1012"}}>
      <SliderLanding></SliderLanding>
      <CourseCards></CourseCards>
      <TeachersCards />
      <ReviewSlider />
    </div>
  );
}

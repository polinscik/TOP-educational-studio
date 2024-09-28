import "./MainPage.scss";
import {Fragment} from "react";
import SliderLanding from "../SliderLanding/SliderLanding";
import CourseCards from "../CourseCards/CourseCards";

export default function MainPage() {
  return (
    <Fragment>
      <SliderLanding></SliderLanding>
      <CourseCards></CourseCards>
    </Fragment>
  );
}

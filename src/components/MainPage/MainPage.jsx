import { useState, useEffect } from "react";
import "./MainPage.scss";
import { Fragment } from "react";
import SliderLanding from "../SliderLanding/SliderLanding";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import TeachersCards from "../TeachersCards/TeachersCards.jsx";
import CourseCards from "../CourseCards/CourseCards";
import Form from "../Form/Form.jsx";
import Telegram from "../Telegram/Telegram.jsx";
import OurContacts from "../OurContacts/OurContacts.jsx";

export default function MainPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#0f1012" }}>
      <SliderLanding></SliderLanding>
      {windowWidth <= 1200 && <Form />}
      <CourseCards></CourseCards>
      <TeachersCards />
      <ReviewSlider />
      <Telegram />
      <OurContacts />
    </div>
  );
}

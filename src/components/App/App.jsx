// import {useState} from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import TeachersCards from "../TeachersCards/TeachersCards";

function App() {
  return (
    <>
      <p>Header Component</p>
      <TeachersCards />
      <ReviewSlider />
      <main>
        <Outlet></Outlet>
      </main>
      <p>Footer component</p>
    </>
  );
}

export default App;

// import {useState} from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import TestimonialsSlider from "../ReviewSlider/ReviewSlider";
import TeachersCards from "../TeachersCards/TeachersCards";

function App() {
  return (
    <>
      <p>Header Component</p>
      <main>
        <Outlet></Outlet>
        <TeachersCards />
        <TestimonialsSlider />
      </main>
      <p>Footer component</p>
    </>
  );
}

export default App;

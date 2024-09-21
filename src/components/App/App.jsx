// import {useState} from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import TestimonialsSlider from "../Reviews/TestimonialsSlider";

function App() {
  return (
    <>
      <p>Header Component</p>
      <TestimonialsSlider />
      <main>
        <Outlet></Outlet>
      </main>
      <p>Footer component</p>
    </>
  );
}

export default App;

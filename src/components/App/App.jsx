// import {useState} from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <p>Footer component</p>
    </>
  );
}

export default App;

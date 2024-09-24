// import {useState} from "react";
import "./App.scss";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <p>Header Component</p>
      <main>
        <Outlet></Outlet>
      </main>
      <p>Footer component</p>
    </>
  );
}

export default App;

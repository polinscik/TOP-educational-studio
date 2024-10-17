import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./style/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./components/App/App.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import CoursePageEngChild from "./components/CoursePages/CoursePageEngChild/CoursePageEngChild.jsx";
import CoursePageRuChild from "./components/CoursePages/CoursePageRuChild/CoursePageRuChild.jsx";
import CoursePageExams from "./components/CoursePages/CoursePageExams/CoursePageExams.jsx";
import CoursePageMusic from "./components/CoursePages/CoursePageMusic/CoursePageMusic.jsx";
import CoursePageEngAdult from "./components/CoursePages/CoursePageEngAdult/CoursePageEngAdult.jsx";
import CoursePageRuAdult from "./components/CoursePages/CoursePageRuAdult/CoursePageRuAdult.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App></App>}
      errorElement={<ErrorPage></ErrorPage>}>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route
        path="/exams"
        element={<CoursePageExams></CoursePageExams>}></Route>
      <Route
        path="/english-for-children"
        element={<CoursePageEngChild></CoursePageEngChild>}></Route>
      <Route
        path="/russian-for-children"
        element={<CoursePageRuChild></CoursePageRuChild>}></Route>
      <Route
        path="/music"
        element={<CoursePageMusic></CoursePageMusic>}></Route>
      <Route
        path="/english-for-adults"
        element={<CoursePageEngAdult></CoursePageEngAdult>}></Route>
      <Route
        path="/russian-for-adults"
        element={<CoursePageRuAdult></CoursePageRuAdult>}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

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
import CoursePage from "./components/CoursePage/CoursePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App></App>}
      errorElement={<ErrorPage></ErrorPage>}>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route path="/exams" element={<div>Экзамены</div>}></Route>
      <Route
        path="/english-for-children"
        element={<CoursePage></CoursePage>}></Route>
      <Route path="/russian-for-children" element={<></>}></Route>
      <Route path="/music" element={<></>}></Route>
      <Route path="/english-for-adults" element={<></>}></Route>
      <Route path="/russian-for-adults" element={<></>}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import {Fragment} from "react";
import "./CoursePageTitle.scss";
function CoursePageTitle({title}) {
  return (
    <Fragment>
      <div className="course-page__heading">
        <h1 className="course-page__title">{title}</h1>
        <p className="course-page__title course-page__title_price">Прайс</p>
      </div>
    </Fragment>
  );
}

export default CoursePageTitle;

import "./CoursePageRow.scss";
import {Fragment, useState} from "react";
import Button from "../../Button/Button";

function CoursePageRow({
  priceArray,
  rowTitle,
  rowImg,
  rowImgAlt,
  rowMainDesc,
  rowAdditionalDesc,
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Fragment>
      <div className="course-page__row">
        <div className="course-page__row-title-container">
          <h2 className="course-page__row-title">{rowTitle}</h2>
          <div className="course-page__row-vector">
            <img src={rowImg} alt={rowImgAlt} />
          </div>
        </div>
        <div className="course-page__desc-container">
          <p className="course-page__desc">{rowMainDesc}</p>
          {expanded && <p className="course-page__desc">{rowAdditionalDesc}</p>}
          {rowAdditionalDesc && (
            <Button
              classname="btn btn_gold course-page__desc-btn"
              onClick={() => setExpanded(!expanded)}>
              {expanded ? "Скрыть" : "Читать дальше"}
            </Button>
          )}
        </div>
        <div className="course-page__price-container">
          {priceArray.map((element) => (
            <div className="course-page__prices">
              <p className="course-page__price-desc">{element.priceName}</p>
              <p className="course-page__price">
                <span>{element.price}</span> ₽
              </p>
            </div>
          ))}
          <Button classname="btn btn_gold course-page__price-btn">
            Записаться
          </Button>
        </div>
      </div>
      <div className="course-page__divider"></div>
    </Fragment>
  );
}

export default CoursePageRow;

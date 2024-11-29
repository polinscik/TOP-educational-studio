import "./CoursePageRow.scss";
import {Fragment, useState} from "react";
import Button from "../../Button/Button";
import FormForRegistration from "../../FormForRegistration/FormForRegistration";

function CoursePageRow({
  priceArray,
  rowTitle,
  rowImg,
  rowImgAlt,
  rowMainDesc,
  rowAdditionalDesc,
}) {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <Fragment>
      <div className="course-page__row">
        <div className="course-page__row-title-container">
          <h2 className="course-page__row-title">{rowTitle}</h2>
          {rowImg && (
            <div className="course-page__row-vector">
              <img src={rowImg} alt={rowImgAlt} />
            </div>
          )}
        </div>
        <div className="course-page__desc-container">
          <div className="course-page__desc">{rowMainDesc}</div>
          <div className="course-page__desc">
            {expanded && rowAdditionalDesc}
          </div>
          {rowAdditionalDesc && (
            <Button
              classname="btn btn_gold course-page__desc-btn"
              onClick={() => setExpanded(!expanded)}>
              {expanded ? "Скрыть" : "Читать дальше"}
            </Button>
          )}
        </div>
        <div className="course-page__price-container">
          <p className="course-page__title_price_mobile course-page__title course-page__title_price ">
            Прайс
          </p>
          {priceArray.map((element) => (
            <div className="course-page__prices" key={element.price}>
              <p className="course-page__price-desc">{element.priceName}</p>
              <p className="course-page__price">
                <span>{element.price}</span> ₽
              </p>
            </div>
          ))}
          <Button classname="btn btn_gold course-page__price-btn" onClick={() => setShowForm(!showForm)}>
            Записаться
          </Button>
        </div>
        {showForm && <FormForRegistration />} {}
      </div>
      <div className="course-page__divider"></div>
    </Fragment>
  );
}

export default CoursePageRow;

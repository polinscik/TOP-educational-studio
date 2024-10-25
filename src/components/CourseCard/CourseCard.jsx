import "./CourseCard.scss";
import {Link} from "react-router-dom";

export default function CourseCard({
  name,
  categories,
  background,
  links,
  rowId,
}) {
  const bgStyle = {
    backgroundImage: "url(" + background + ")",
  };
  return (
    <div className="courseCard" style={bgStyle} id={rowId}>
      <p className="courseCard__title">{name}</p>
      <div className="courseCard__btn-container">
        <Link
          className="courseCard__btn"
          to={links[0]}
          preventScrollReset={false}>
          <p className="courseCard__btn-text">{categories[0]}</p>
        </Link>
        <Link
          className="courseCard__btn"
          to={links[1]}
          preventScrollReset={false}>
          <p className="courseCard__btn-text">{categories[1]}</p>
        </Link>
      </div>
    </div>
  );
}

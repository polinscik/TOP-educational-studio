import "./CourseCard.scss";

export default function CourseCard({name, categories, background}) {
  const bgStyle = {
    backgroundImage: "url(" + background + ")",
  };
  return (
    <div className="courseCard" style={bgStyle}>
      <p className="courseCard__title">{name}</p>
      <div className="courseCard__btn-container">
        <button className="courseCard__btn">
          <p className="courseCard__btn-text">{categories[0]}</p>
        </button>
        <button className="courseCard__btn">
          <p className="courseCard__btn-text">{categories[1]}</p>
        </button>
      </div>
    </div>
  );
}

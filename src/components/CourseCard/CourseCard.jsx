import "./CourseCard.scss";

export default function CourseCard({name, categories}) {
  return (
    <div>
      <div className="courseCard__container">
        <h3 className="courseCard__title">{name}</h3>
        <button className="courseCard__btn">{categories[0]}</button>
        <button className="courseCard__btn">{categories[1]}</button>
      </div>
    </div>
  );
}

import CourseCard from "../CourseCard/CourseCard";
import "./CourseCards.scss";
const COURSE_DATA = [
  {name: "Английский язык", categories: ["Взрослым", "Школьникам"]},
  {name: "Русский язык", categories: ["Взрослым", "Школьникам"]},
  {
    name: "Музыка",
    categories: ["Основы саунд дизайна", "Работа в цифровых аудиостанциях"],
  },
  {name: "Подготовка к ЕГЭ и ОГЭ", categories: ["Русский", "Английский"]},
];

export default function CourseCards() {
  return (
    <section className="courseCards">
      <h2 className="courseCards__title">Наши курсы</h2>
      <div className="courseCards__container">
        {COURSE_DATA.map((course) => (
          <CourseCard name={course.name} categories={course.categories} />
        ))}
      </div>
    </section>
  );
}

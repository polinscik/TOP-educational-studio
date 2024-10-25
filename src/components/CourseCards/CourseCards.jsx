import CourseCard from "../CourseCard/CourseCard";
import "./CourseCards.scss";
const COURSE_DATA = [
  {
    id: 1,
    name: "Английский язык",
    links: ["/english-for-adults", "/english-for-children"],
    categories: ["Взрослым", "Школьникам"],
    bg: "/src/images/banner-english-1.png",
  },
  {
    id: 2,
    name: "Русский язык",
    links: ["/russian-for-adults", "/russian-for-children"],
    categories: ["Взрослым", "Школьникам"],
    bg: "/src/images/banner-russian-1.png",
  },
  {
    id: 3,
    name: "Музыка",
    links: ["/music#soundDesign", "/music#hitmaker"],
    categories: ["Основы саунд дизайна", "Работа в цифровых аудиостанциях"],
    bg: "/src/images/banner-music-1.png",
  },
  {
    id: 4,
    name: "Подготовка к ЕГЭ и ОГЭ",
    links: ["/exams#graduateRussian", "/exams#exams"],
    categories: ["Русский", "Английский"],
    bg: "/src/images/banner-exams-1.png",
  },
];

export default function CourseCards() {
  return (
    <section className="courseCards">
      <h2 className="courseCards__title">Наши курсы</h2>
      <div className="courseCards__container">
        {COURSE_DATA.map((course) => (
          <CourseCard
            name={course.name}
            categories={course.categories}
            background={course.bg}
            links={course.links}
            key={course.id}
          />
        ))}
      </div>
    </section>
  );
}

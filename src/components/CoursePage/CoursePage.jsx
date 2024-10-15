import "./CoursePage.scss";
import Button from "../Button/Button";

function CoursePage() {
  return (
    <section className="course-page">
      <div className="course-page__heading">
        <h1 className="course-page__title">Английский для школьников</h1>
        <p className="course-page__title course-page__title_price">Прайс</p>
      </div>
      <div className="course-page__row">
        <div className="course-page__row-title-container">
          <h2 className="course-page__row-title">JUNIOR</h2>
          <div className="course-page__row-vector">
            <img src="src/images/grade1to4.png" alt="1-4 класс" />
          </div>
        </div>
        <div className="course-page__desc-container">
          <p className="course-page__desc">
            Курс «Junior»  имеет целью бесстрессовое знакомство детей с
            английским языком. Если ребёнок начал изучать язык до второго класса
            (обычно во втором классе начинается этот предмет в российских
            школах), шансы на успешное освоение школьной программы возрастают на
            250-300 процентов. Это не мифы Древней Греции, это – проверенная
            опытом статистика.
          </p>
          <p className="course-page__desc">
            На курсе мы:
            <ul>
              <li>- Учимся читать;</li>
              <li>- Учимся писать ПРОПИСЬЮ;</li>
              <li>
                - Изучаем много полезной и интересной детям лексики (животные,
                фрукты, овощи, ягоды и т.д.);
              </li>
              <li>- Изучаем азы грамматики.</li>
            </ul>
            Школьная программа после прохождения нашего курса будет вашему
            ребёнку не просто по плечу, она будет ему по колено!
          </p>
          <Button classname="btn btn_gold course-page__desc-btn">
            Читать дальше
          </Button>
        </div>
        <div className="course-page__price-container">
          <div className="course-page__prices">
            <p className="course-page__price-desc">Индивидуальный урок</p>
            <p className="course-page__price">1 400 ₽</p>
          </div>
          <div className="course-page__prices">
            <p className="course-page__price-desc">Урок в группе</p>
            <p className="course-page__price">700 ₽</p>
          </div>
          <Button classname="btn btn_gold course-page__price-btn">
            Записаться
          </Button>
        </div>
      </div>
      <div className="course-page__divider"></div>
    </section>
  );
}

export default CoursePage;

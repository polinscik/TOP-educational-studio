import { useState, useEffect } from "react";
import "./SliderLanding.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bgImg1 from "../../images/landing-slider-bg-1.png";
import bgImg2 from "../../images/landing-slider-bg-2.png";
import bgImg3 from "../../images/landing-slider-bg-3.png";
import Form from "../Form/Form";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <img
      src="src/images/right-arrow.png"
      className={className}
      style={{
        ...style,
        content: "",
        maxWidth: "100%",
        width: "auto",
        height: "auto",
        zIndex: "1",
      }}
      onClick={onClick}></img>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <img
      src="src/images/left-arrow.png"
      className={className}
      style={{
        ...style,
        content: "",
        maxWidth: "100%",
        width: "auto",
        height: "auto",
      }}
      onClick={onClick}></img>
  );
}
export default function SliderLanding() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider-landing">
      {windowWidth >= 1200 && <Form />}
      <Slider {...settings} className="slider-landing_arrow-style">
        <div className="slider-landing__bg-container">
          <div
            className="slider-landing__bg"
            style={{
              backgroundImage: "url(" + bgImg1 + ")",
            }}>
            <div className="slider-landing_slide">
              <h1 className="slider-landing_title">Привет!</h1>
              <p className="slider-landing_text">
                Мы одинаково круто обучаем английскому, русскому, саунд
                дизайну,  аранжировке и работе в цифровых аудиостанциях!
              </p>
              <p className="slider-landing_text">
                Выбирай курс, отправляй заявку и приступай к обучению!
              </p>
              <div className="slider-landing_btn-group">
                <button className="slider-landing_btn">Узнать больше</button>
                <img
                  className="slider-landing_arrow"
                  src="src/images/landing-btn-arrow.png"
                  alt="стрелка вправо"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-landing__bg-container">
          <div
            className="slider-landing__bg"
            style={{
              backgroundImage: "url(" + bgImg2 + ")",
              backgroundPositionX: "25%",
            }}>
            <div className="slider-landing_slide">
              <p className="slider-landing_text">
                Курсы английского языка для взрослых – это просто ТОП!
              </p>
              <ul className="slider-landing_text slider-landing_text_ul">
                <li>Любой уровень</li>
                <li>Обширное тематическое поле</li>
                <li>Индивидуальный подход</li>
                <li>Море разговорной практики</li>
                <li>Дипломированные педагоги с огромным опытом</li>
              </ul>
              <p className="slider-landing_text">
                Для работы? Для путешествий? Для бизнеса? Для учёбы за границей?
              </p>
              <p className="slider-landing_text">
                Наш авторский подход придётся по душе ученику с любым запросом!
              </p>
              <div className="slider-landing_btn-group">
                <button className="slider-landing_btn">Узнать больше</button>
                <img
                  className="slider-landing_arrow"
                  src="src/images/landing-btn-arrow.png"
                  alt="стрелка вправо"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-landing__bg-container">
          <div
            className="slider-landing__bg"
            style={{
              backgroundImage: "url(" + bgImg3 + ")",
              backgroundPositionX: "20%",
            }}>
            <div className="slider-landing_slide">
              <p className="slider-landing_text">
                Курсы по подготовке к ОГЭ и ЕГЭ по русскому и английскому языкам
                – твой невероятный шанс подготовиться к экзаменам и заметно
                «прокачать» язык!
              </p>
              <p className="slider-landing_text">
                В школе тебя приговорили к провалу?
              </p>
              <p className="slider-landing_text">
                Наши ТОПовые педагоги разрушат любой приговор!
              </p>
              <p className="slider-landing_text">
                Студия «ТОП». Мы учим думать.
              </p>
              <div className="slider-landing_btn-group">
                <button className="slider-landing_btn">Узнать больше</button>
                <img
                  className="slider-landing_arrow"
                  src="src/images/landing-btn-arrow.png"
                  alt="стрелка вправо"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

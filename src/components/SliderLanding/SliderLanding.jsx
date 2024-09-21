import "./SliderLanding.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props) {
  const {className, style, onClick} = props;
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
      }}
      onClick={onClick}></img>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props;
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
  return (
    <div className="slider-landing">
      <Slider {...settings} className="slider-landing_arrow-style">
        <div>
          <div className="slider-landing_slide">
            <h1 className="slider-landing_title">Привет!</h1>
            <p className="slider-landing_text">
              Мы одинаково круто обучаем английскому, русскому, саунд дизайну, 
              аранжировке и работе в цифровых аудиостанциях!
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
        <div>
          <div className="slider-landing_slide">
            <h1 className="slider-landing_title">Всем привет!</h1>
            <p className="slider-landing_text">
              Мы - семейная студия развития ТОП, которая помогает взрослым
              раскрыть свои таланты и найти новые увлечения.
            </p>
            <p className="slider-landing_text">
              Наши курсы направлены на личностный рост, развитие креативности и
              освоение новых навыков в комфортной и дружелюбной атмосфере.
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
        </div>{" "}
        <div>
          <div className="slider-landing_slide">
            <h1 className="slider-landing_title">Привет!</h1>
            <p className="slider-landing_text">
              Мы верим, что учиться и развиваться никогда не поздно, и с нами вы
              сможете сделать это увлекательно и эффективно. Присоединяйтесь к
              нашей дружной студии, где каждый найдет занятие по душе и сможет
              стать лучше версией самого себя!
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
      </Slider>
    </div>
  );
}

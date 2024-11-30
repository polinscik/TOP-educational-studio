import React, { useState, useEffect, useCallback } from "react";
import "./ReviewSlider.scss";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";
import FormForReview from "../FormForReview/FormForReview";

const testimonials = [
  {
    id: 1,
    text: "Преподаватель Диана - очень яркий и жизнерадостный человек. Мы безмерно счастливы, что попали на занятия именно к ней ❤Я благодарна не только за знания, которыми овладела моя дочь, но ещё и большой интерес к незнакомому языку ❤Моя дочь в восторге от занятий, так как они проходят в нестандартной и очень интересной форме. Всем рекомендую преподавателя Диану.",
    name: "Елена,",
    profession: "сотрудник авиакомпании, мама 2-х детей",
    product: "Английский язык",
  },
  {
    id: 2,
    text: "Супер учитель 🔥 у детей появился интерес к английскому языку, это заслуга Дианы. J  Большая благодарность за ее труд и уникальный подход !!! Дети ждут каждый урок с нетерпением!",
    name: "Ольга,",
    profession: "предприниматель, мама 3-х детей",
    product: "Английский язык",
  },
  {
    id: 3,
    text: "Хочу оставить отзыв о студии развития «Топ». Удобное месторасположение, находится рядом с остановкой. Добраться очень легко на транспорте. В самой студии много пространства, что позволяет играть с детьми в подвижные игры. Когда я выбирала языковую школу, для меня было важным, чтобы преподаватель в своей работе использовал творческий подход. Диана смогла заинтересовать, замотивировать ребенка. Сын мне сказал, что она самый лучший учитель (без всякой лести). Учитель находит к каждому ребенку индивидуальный подход. Для ребенка создается ситуация успеха, хвалят, другие дети в группе аплодируют, если ребенок выполняет то или иное задание, а если что-то не получается, то учитель помогает, объясняет еще раз и настраивает своих учеников, что все получится. Мы живем в другом районе города, но не жалеем, что ездим к вам на уроки английского языка. Думаю, что даже я сама хотела бы ходить к вам на английский язык). Хотелось бы отметить, что учитель очень ответственно подходит к подготовке материала для урока. Уроки проходят интересно, доступно дается новый материал, за одно занятие дети успевают пройти тему и закрепить её. Сейчас мой сын учится во втором классе, ему легко дается английский язык благодаря вашей школе и вашей методике. Диана, спасибо вам большое за вклад и развитие моего ребенка. 🙏🙏🙏 ",
    name: "Ирина,",
    profession: "мама 4-х детей",
    product: "Английский язык",
  },
  {
    id: 4,
    text: 'Так случилось, что "созрел" учить английский в свои 38 лет. Конечно, я знал сотню-две английских слов, но на этом познания заканчивались. С преподавателем Дианой начали занятия on-line с середины апреля. Это крутой профессионал и очень хороший, открытый человек. Диане повезло, она нашла себе в преподавании - это на 100% ее призвание. Занимаюсь 4 раза в неделю, продолжительность занятия 1 час. На занятиях 90% - это общение, преподаватель выводит тебя в разговоре на те структуры, которые в данный момент "прокачиваем". Теорию изучаю в виде домашнего задания и если есть вопросы и непонимания - все это проговаривается на уроке, пока не "дойдет". Результат - через 2 с небольшим месяца я смог общаться с риелторами (индусы, арабы) в ОАЭ, даже шутить шутки. Барьер сломался, я себя так свободно никогда не чувствовал за границей. На этом, конечно, не останавливаюсь, хочу C1 Advanced.',
    name: " Константин,",
    profession: "руководитель отдела web-разработки",
    product: "Английский язык",
  },
  {
    id: 5,
    text: "Моя дочь с огромным удовольствием посещает занятия английского языка. Диана как педагог очень ответственная, коммуникабельная с детьми и с родителями, открытая, добрая, компетентная. Знает свое дело. Буду советовать всем своим знакомым.",
    name: "Наталия,",
    profession: "Предприниматель, мама 3-х детей",
    product: "Английский язык",
  },
  {
    id: 6,
    text: "Благодарю Диану за ее любовь к русскому языку и с интересом преподавание для детей! Мой сын ходил два года с радостью на уроки. В школе учителя, к сожалению, спрашивают детей, которые и так понимают от природы. Диана подняла знания с 5 кл и мы, я считаю, прекрасно сдали экзамен на «3», не хватило 1 бала до «4» . Но это твердые наши знания. Благодарю Бога за встречу с этим уникальным учителем! Однозначно всем рекомендую. 🙏🌸❤️ ",
    name: "Марина,",
    profession: "подолог, предприниматель",
    product: "Русский язык",
  },
  {
    id: 7,
    text: "Пришёл в студию и познакомился с Артуром в конце 11 класса. Понимая необходимость знать английский, чтобы строить карьеру успешного айтишника, я остановился на индивидуальных занятиях и занимался без перерывов. Уже в середине 1 курса преподаватель английского отметила мои неплохие знания и произношение и ставила в пример одногруппникам. Теперь я могу общаться в англоязычных комьюнити без стеснения. Хочу отметить, что Артур сделал для меня изучение английского интересным и помог приумножить мои школьные знания, за что я очень ему благодарен.)",
    name: "Матвей,",
    profession: "студент Байкальского государственного университета",
    product: "Английский язык",
  },
  {
    id: 8,
    text: "Я пришла учить английский с уровнем А1, был запрос подтянуть уровень, так как планировали переехать с семьёй за границу. Училась очень активно год, затем ещё один, но уже для поддержания уровня. Переехали, чувствую себя комфортно, могу общаться с кем угодно и на какую угодно тему! И вот в этом году прошла собеседование на английском и меня пригласили на работу в IT компанию! Очень удивились и похвалили за отсутствие русского акцента! Благодаря моему упорству и помощи прекрасного преподавателя Дианы всё получилось!",
    name: "Наталья,",
    profession: "администратор в IT компании, мама 2-х детей",
    product: "Английский язык",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [maxLength, setMaxLength] = useState(570);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 570) {
        setMaxLength(200);
        setItemsPerPage(2);
      } else if (window.innerWidth <= 1024) {
        setMaxLength(200);
      } else {
        setMaxLength(570);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerPage)
    );
    setExpandedCard(null);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(testimonials.length / itemsPerPage)) %
        Math.ceil(testimonials.length / itemsPerPage)
    );
    setExpandedCard(null);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handleOpen = useCallback(() => {
    setShowForm(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setShowForm(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <div className="testimonials-slider">
      <h2 className="testimonials-heading" id="about-title">
        Отзывы про нас
      </h2>
      <div className="slider-container">
        <button className="arrow left" onClick={prev}>
          <img src={leftArrow} alt="Left arrow" />
        </button>
        <div className="testimonials-grid">
          {currentTestimonials.map((testimonial, index) => {
            const isUpperRow = index < 2;
            const isExpanded = expandedCard === testimonial.id;

            return (
              <div
                className={`testimonial-card ${isUpperRow ? "upper" : "lower"
                  } ${isExpanded ? "expanded" : ""}`}
                key={testimonial.id}
              >
                <p className="quote">
                  {isExpanded || testimonial.text.length <= maxLength
                    ? testimonial.text
                    : `${testimonial.text.slice(0, maxLength)}...`}
                </p>
                {!isExpanded && testimonial.text.length > maxLength && (
                  <button
                    onClick={() => setExpandedCard(testimonial.id)}
                    className="read-more"
                  >
                    Читать больше
                  </button>
                )}
                <div className="testimonial-footer">
                  <div className="author-info">
                    <p>{testimonial.name}</p>
                    <p>{testimonial.profession}</p>
                  </div>
                  <div className="product-container">
                    <div className="product-name">{testimonial.product}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={next}>
          <img src={rightArrow} alt="Right arrow" />
        </button>
      </div>
      <div className="leave-feedback-button">
        <button className="leave-feedback" onClick={handleOpen}>
          Оставить отзыв
        </button>
      </div>
      {showForm && <FormForReview onClickClose={handleClose} />}
    </div>
  );
};

export default TestimonialsSlider;

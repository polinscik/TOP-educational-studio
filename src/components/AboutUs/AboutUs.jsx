import "./AboutUs.scss";
function AboutUs() {
  return (
    <div className="au">
      <section className="au__container">
        <h2 className="au__title">О НАС</h2>
        <div className="au__intro">
          <img className="au__img1" src="/src/images/aboutus1.png" alt="" />
          <p
            className="au__text au__text_large au__text1"
            style={{paddingBottom: "2vh"}}>
            Привет, друг! Мы - семейная студия развития "ТОП".
          </p>
          <p className="au__text au__text15">
            Ко всем маленьким и юным ученикам нашей студии мы относимся как к
            своим детям, то есть вкладываемся в их интеллектуальное и творческое
            развитие так, как это сделать могут только родители.
          </p>

          <img className="au__img2" src="/src/images/aboutus2.png" alt="" />
          <div className="au__text2">
            <p className="au__text" style={{paddingBottom: "2vh"}}>
              С учениками постарше выстраиваем дружеско-партнёрские отношения с
              самой первой минуты знакомства.
            </p>
            <p className="au__text">
              Мы не просто качественно ведём уроки, мы помогаем ученикам
              достигать <span className="au__text_gold">СВОИХ вершин</span>,
              покорять <span className="au__text_gold">СВОИ высоты</span>,
              поэтому и называемся просто и понятно - "
              <span className="au__text_gold">ТОП</span>"!
            </p>
          </div>
        </div>
        <div className="au__bonuses">
          <p className="au__text au__text1">
            Кроме постоянно действующих курсов, мы предлагаем уникальные
            образовательные, развивающие и творческие ПРОДУКТЫ:
          </p>
          <div className="au__text2">
            <ul className="au__text au__list" style={{paddingBottom: "2vh"}}>
              <li>
                семейные клубы (мамы, папы и дети учат английский в одной
                группе);
              </li>
              <li>мастер-классы по воспитанию, развитию и обучению детей;</li>
              <li>мастер-классы по обучению взрослых;</li>
              <li>консультации по вопросам воспитания, развития и обучения;</li>
              <li> разговорные клубы (английский и русский языки); </li>
              <li>
                составление программ для индивидуального и группового обучения
                по вашему запросу;
              </li>
              <li>услуги редактора и корректора;</li>
              <li>
                написание и озвучка (+ музыкальное оформление) текстов
                (информационных, рекламных и т.д.) по вашему запросу
              </li>
            </ul>
            <p className="au__text">и ещё много чего есть у нас в студии!</p>
          </div>
          <img className="au__img1" src="/src/images/aboutus3.png" alt="" />
          <img className="au__img2" src="/src/images/aboutus4.png" alt="" />
          <div className="au__text au__text3 au__bonuses-text">
            В студии постоянно действуют:
            <ul className="au__text au__list">
              <li>реферальная программа "ПРИВЕДИ ДРУГА";</li>
              <li>ГИБКАЯ СИСТЕМА СКИДОК И БОНУСОВ.</li>
            </ul>
          </div>
        </div>
        <div className="au__outro">
          <div className="au__text au__text3 au__outro-text">
            <p style={{paddingBottom: "1.5vh"}}>
              В студии постоянно действуют:
            </p>
            <ul className="au__text au__list">
              <li>реферальная программа "ПРИВЕДИ ДРУГА";</li>
              <li>ГИБКАЯ СИСТЕМА СКИДОК И БОНУСОВ.</li>
            </ul>
          </div>
          <p
            className="au__text au__text_large au__text1"
            style={{alignSelf: "center", fontSize: "1.25rem"}}>
            В нашей семье "ТОП" принято дарить подарки! Никто без подарков не
            остаётся!
          </p>

          <img className="au__img1" src="/src/images/aboutus5.png" alt="" />
          <img className="au__img2" src="/src/images/aboutus6.png" alt="" />
        </div>
        <p className="au__text au__text_large au__text_gold au__closing-text">
          Добро пожаловать в нашу дружную семейную студию "ТОП"!
        </p>
      </section>
    </div>
  );
}

export default AboutUs;

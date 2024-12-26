import "./Footer.scss";
import Button from "../Button/Button.jsx";
import TOPLogo from "../../images/footer-top-logo.svg";
import MountainsLogo from "../../images/footer-mountains-logo.svg";

function Footer() {
  const handleButtonClick = () => {
    window.open("https://docs.google.com/document/d/1IE_521FNdx9HJkJYxWxNN6x-ww3-y4jp0VJw6L3H2Ek", "_blank");
  };

  return (
    <div className="footer">
      <div className="footer__btn">
        <Button classname="btn btn_footer" onClick={handleButtonClick}>
          Правила обучения в студии
        </Button>
      </div>
      <div className="footer__requisites requisites">
        <h3 className="requisites__title">РЕКВИЗИТЫ</h3>
        <p className="requisites__text">Журавлева Диана Александровна</p>
        <p className="requisites__text">ИНН 850601499363</p>
        <p className="requisites__text">+79027617966</p>
        <p className="requisites__text">tataleksa07@rambler.ru</p>
      </div>
      <div className="footer__brand brand">
        <p className="brand__slogan brand__slogan_1">Выбирай лучшее!</p>
        <p className="brand__slogan brand__slogan_2">Вкладывайся в будущее!</p>
        <p className="brand__slogan brand__slogan_3">Будь в ТОПЕ!</p>
        <img
          src={TOPLogo}
          alt="Логотип студии ТОП"
          className="brand__logo brand__logo_1"
        />
        <img
          src={MountainsLogo}
          alt="Логотип студии ТОП"
          className="brand__logo brand__logo_2"
        />
        <p className="brand__license">Лицензия: CC BY-NC-ND 4.0</p>
      </div>
    </div>
  );
}

export default Footer;

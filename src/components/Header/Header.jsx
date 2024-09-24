import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="wrapper">
      <div className="header-content-wrap">
        <div className="header-logo-content">
          <p>Выбирай лучшее!</p>
          <img src="/src/images/logo.svg" alt="ТОП" />
          <p>Вкладывайся в будущее!</p>
        </div>
        <div className="header-contacts">
          <a
            href="https://t.me/TOP_studio_38"
            className="header-contacts-telegram"
          >
            <div className="telegram-icon">
              <img src="/src/images/telegram-icon.svg" alt="" />
            </div>
            <p>+77011234567</p>
          </a>
        </div>
      </div>
      <nav className="header-nav">
        <ul className="menu">
          <li className="tt">
            <a href="#" className="courses-link">
              Курсы
            </a>
            <ul className="courses-link-submenu">
              <li>
                <p>для Взрослых</p>
                <ul className="adults-submenu">
                  <li>
                    <a href="#">Английский</a>
                  </li>
                  <li>
                    <a href="#">Русский</a>
                  </li>
                </ul>
              </li>
              <li>
                <p>для Школьников</p>
                <ul className="childs-submenu">
                  <li>
                    <a href="#">Английский</a>
                  </li>
                  <li>
                    <a href="#">Русский</a>
                  </li>
                  <li>
                    <a href="#">Подготовка к ЕГЭ/ОГЭ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Музыка</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="" className="test-link">
              Онлайн тесы
            </a>
            <ul className="test-submenu">
              <li>
                <a href="">тренажёр ЕГЭ/ОГЭ</a>
              </li>
              <li>
                <a href="">тест по аглийскому</a>
              </li>
              <li>
                <a href="">тест по русскому</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="" className="about-link">
              О нас
            </a>
            <ul className="about">
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Преподаватели</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </li>
          <li className="telegram-link">
            <a href="https://t.me/TOP_studio_38">Мы в Telegram</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "/src/images/logo.svg";
import TgIcon from "/src/images/telegram-icon.svg";
import BurgerBtn from "/src/images/menu-burger-horizontal-bold.svg";
import CloseBtn from "/src/images/close-btn-burger-menu.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState();
  return (
    <div className="wrapper">
      <div className="header-content-wrap">
        <div className="header-logo-content">
          <p>Выбирай лучшее!</p>
          <img src={Logo} alt="ТОП" />
          <p>Вкладывайся в будущее!</p>
        </div>
        <nav className={`header-nav ${isOpen ? "burger-active" : ""}`}>
          <ul className="menu">
            <li>
              <p className="courses-title">Курсы</p>
              <ul className="courses-link-submenu">
                <li>
                  <p className="submenu-title">для Взрослых</p>
                  <ul className="adults-submenu submenu">
                    <li>
                      <a href="#">Английский</a>
                    </li>
                    <li>
                      <a href="#">Русский</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p lassName="submenu-title">для Школьников</p>
                  <ul className="childs-submenu submenu">
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
              <p className="test-link">Онлайн тесты</p>
              <ul className="test-submenu submenu">
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
              <p className="about-link">О нас</p>
              <ul className="about submenu">
                <li>
                  <a href="#about-title">О нас</a>
                </li>
                <li>
                  <a href="#teachers-title">Преподаватели</a>
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
      <div className="wrap-btns">
        <div className="header-contacts">
          <a
            href="https://t.me/TOP_studio_38"
            className="header-contacts-telegram"
          >
            <div className="telegram-icon">
              <img src={TgIcon} alt="" />
            </div>
            <p>+77011234567</p>
          </a>
        </div>
        <button className="header-burger-btn" onClick={() => setOpen(!isOpen)}>
          {isOpen ? (
            <img src={CloseBtn} alt="" />
          ) : (
            <img src={BurgerBtn} alt="" />
          )}
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  About,
  Adults,
  Children,
  Music,
  OnlineTests,
} from "../NavComponents/NavComponents";
import Logo from "/src/images/logo.svg";
import TgIcon from "/src/images/telegram-icon.svg";
import BurgerBtn from "/src/images/menu-burger-horizontal-bold.svg";
import CloseBtn from "/src/images/close-btn-burger-menu.svg";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleBurgerMenuBtn() {
    setOpen(!open);
  }

  return (
    <div className="wrapper">
      <div className="header-content-wrap">
        <div className="header-logo-content">
          <p>Выбирай лучшее!</p>
          <NavLink to={"/"}>
            <img src={Logo} alt="ТОП" />
          </NavLink>
          <p>Вкладывайся в будущее!</p>
        </div>
        <nav
          className={`header-nav ${open ? "burger-active" : ""}`}
          onClick={handleBurgerMenuBtn}
        >
          <ul className="menu">
            <li>
              <p className="courses-title">Курсы</p>
              <ul className="courses-link-submenu submenu">
                <Adults></Adults>
                <Children></Children>
                <Music></Music>
              </ul>
            </li>
            <li>
              <p className="test-link">Онлайн тесты</p>
              <ul className="test-submenu submenu">
                <OnlineTests></OnlineTests>
              </ul>
            </li>
            <li>
              <p className="about-link">О нас</p>
              <ul className="about-submenu submenu">
                <About></About>
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
              <img src={TgIcon} alt="Телеграм" />
            </div>
            <p>+77011234567</p>
          </a>
        </div>
        <button className="header-burger-btn" onClick={handleBurgerMenuBtn}>
          {open ? (
            <img src={CloseBtn} alt="Закрыть меню" />
          ) : (
            <img src={BurgerBtn} alt="Меню" />
          )}
        </button>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Adults() {
  const list = [
    {
      name: "Английский",
      href: "/english-for-adults",
    },
    {
      name: "Русский",
      href: "/russian-for-adults",
    },
  ];

  return (
    <li>
      <p className="submenu-title">Взрослым</p>
      <ul className="adults-submenu submenu">
        {list.map((item, index) => (
          <li key={index}>
            <NavLink to={item.href}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Children() {
  const list = [
    {
      name: "Английский",
      href: "/english-for-children",
    },
    { name: "Русский", href: "/russian-for-children" },
    { name: "Подготовка к ЕГЭ/ОГЭ", href: "/exams" },
  ];

  return (
    <li>
      <p className="submenu-title">Детям</p>
      <ul className="adults-submenu submenu">
        {list.map((item, index) => (
          <li key={index}>
            <NavLink to={item.href}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Music() {
  return (
    <li>
      <NavLink to="/music">Музыка</NavLink>
    </li>
  );
}

export function OnlineTests() {
  const list = [
    {
      name: "Английский",
      href: "/english-test",
    },
    { name: "Русский", href: "/russian-test" },
    { name: "Тренажёр ЕГЭ/ОГЭ", href: "/exams-test" },
  ];

  return (
    <>
      {list.map((item, index) => (
        <li key={index}>
          <NavLink to={item.href}>{item.name}</NavLink>
        </li>
      ))}
    </>
  );
}

export function About() {
  const list = [
    {
      name: "Отзывы",
      href: "/#about-title",
    },
    { name: "Преподаватели", href: "/#teachers-title" },
    { name: "Контакты", href: "/" },
  ];

  return (
    <>
      {list.map((item, index) => (
        <li key={index}>
          <HashLink smooth to={item.href}>
            {item.name}
          </HashLink>
        </li>
      ))}
    </>
  );
}

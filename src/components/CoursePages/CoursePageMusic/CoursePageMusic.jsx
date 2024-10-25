import "./CoursePageMusic.scss";
import {Fragment} from "react";
import CoursePageTitle from "../../CoursePageElements/CoursePageTitle/CoursePageTitle";
import CoursePageRow from "../../CoursePageElements/CoursePageRow/CoursePageRow";

function HitmakerRowMainDesc() {
  return (
    <Fragment>
      <p>
        Музыкальный курс по работе в цифровых аудиостанциях «ХИТмейкер» имеет
        целью помочь музыкантам и композиторам  освоить цифровые станции «FL
        Studio» и «Cubase» (на выбор) на уровне, достаточном для звукозаписи, а
        также написания и сведения музыки любого жанра.
      </p>
      <p>На курсе мы научимся:</p>
      <ul>
        <li>- создавать шаблон проекта;</li>
        <li>- устанавливать и загружать виртуальные инструменты;</li>
        <li>- записывать миди- и аудиотреки;</li>
        <li>- создавать аранжировки и выполнять сведение;</li>
        <li>- синтезировать собственные сэмплы и текстуры.</li>
      </ul>
      <p style={{marginTop: "2vh"}}>
        Гарантируется полностью индивидуальный подход в комфортном для тебя
        темпе и в рамках твоих музыкальных предпочтений.
      </p>
      <p>Возможен вариант занятий в микрогруппах (2 человека одного уровня).</p>
      <p>Стоимость одного такого занятия – 1000 руб./час с ученика.</p>
      <p>
        Хочешь писать крутые хиты и стать популярным? Записывайся на курс
        «ХИТмейкер»!
      </p>
    </Fragment>
  );
}
function MasterRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс по саунд дизайну «Мастер Звукофф» имеет целью познакомить
        обучающихся с основными принципами и техниками создания звуковых сэмплов
        и текстур.
      </p>
       <p>На курсе мы научимся:</p>
      <ul>
        <li>- основам звукозаписи;</li>
        <li>- созданию собственных звуков на основе существующих;</li>
        <li>- созданию собственных звуков с помощью синтеза;</li>
        <li>
          - озвучиванию видео (клипы, ролики, рекламные ролики, трейлеры);
        </li>
        <li>- основам сведения и мастеринга. </li>
      </ul>
      <p>
        Обучение проводится с помощью цифровых станций «FL Studio» или
        «Cubase»,  но ты можешь выполнять свои проекты в любой другой станции.
      </p>
      <p>Возможен вариант занятий в микрогруппах (2 человека одного уровня).</p>
      <p>Стоимость одного такого занятия – 1000 руб./час с ученика. </p>
      <p>
        Хочешь делать крутую озвучку роликов? Тебе понравится наш курс!
        Записывайся!
      </p>
    </Fragment>
  );
}

const PAGE_DATA = {
  title: "Музыкальные курсы",
  rows: [
    {
      rowTitle: "ХИТМЕЙКЕР",
      rowId: "hitmaker",
      rowImg: "",
      rowImgAlt: "",
      rowMainDesc: <HitmakerRowMainDesc></HitmakerRowMainDesc>,
      rowAdditionalDesc: "",
      priceArray: [{priceName: "Индивидуальный урок", price: "1500"}],
    },
    {
      rowTitle: "МАСТЕР ЗВУКОФФ",
      rowId: "soundDesign",
      rowImg: "",
      rowImgAlt: "",
      rowMainDesc: <MasterRowMainDesc></MasterRowMainDesc>,
      rowAdditionalDesc: "",
      priceArray: [{priceName: "Индивидуальный урок", price: "1500"}],
    },
  ],
};

function CoursePageMusic() {
  return (
    <section className="course-page course-page_music">
      <CoursePageTitle title={PAGE_DATA.title}></CoursePageTitle>
      {PAGE_DATA.rows.map((row) => (
        <CoursePageRow
          priceArray={row.priceArray}
          {...row}
          key={row.rowId}></CoursePageRow>
      ))}
    </section>
  );
}

export default CoursePageMusic;

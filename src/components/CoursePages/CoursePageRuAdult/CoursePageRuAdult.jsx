import "./CoursePageRuAdult.scss";
import {Fragment} from "react";
import CoursePageTitle from "../../CoursePageElements/CoursePageTitle/CoursePageTitle";
import CoursePageRow from "../../CoursePageElements/CoursePageRow/CoursePageRow";

function AdultRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс «Зрелый русич» рассчитан на студентов и взрослых людей, желающих
        знать русский язык не просто на обывательском уровне, а углубиться в мир
        одного из самых богатых языков мира. 
      </p>
      <p style={{marginTop: "2.5vh"}}>На курсе мы:</p>
      <ul>
        <li>- изучаем нормы русского языка;</li>
        <li>- изучаем грамматику;</li>
        <li>- изучаем основы ораторского искусства и культуры речи;</li>
        <li>- учимся творить шедевральные тексты.</li>
      </ul>
       <p style={{marginTop: "2.5vh"}}>ВАЖНО!</p>
      <p>
        Педагоги максимально адаптируют курс под цели, потребности и запросы
        ученика.
      </p>
      <p style={{marginTop: "2.5vh"}}>
        Народ, знающий свой язык на достойном уровне, заслуживает уважения.
        Учёбе все возрасты покорны!
      </p>
    </Fragment>
  );
}

const PAGE_DATA = {
  title: "Русский язык для взрослых",
  rows: [
    {
      rowTitle: "ЗРЕЛЫЙ РУСИЧ",
      rowId: "adultRussian",
      rowImg: "",
      rowImgAlt: "",
      rowMainDesc: <AdultRowMainDesc></AdultRowMainDesc>,
      rowAdditionalDesc: "",
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1700"},
        {priceName: "Урок в группе", price: "800"},
      ],
    },
  ],
};

function CoursePageRuAdult() {
  return (
    <section className="course-page course-page_ru-adult">
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

export default CoursePageRuAdult;

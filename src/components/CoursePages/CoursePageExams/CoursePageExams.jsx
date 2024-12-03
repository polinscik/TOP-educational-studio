import "./CoursePageExams.scss";
import { Fragment } from "react";
import CoursePageTitle from "../../CoursePageElements/CoursePageTitle/CoursePageTitle";
import CoursePageRow from "../../CoursePageElements/CoursePageRow/CoursePageRow";

function ExamsRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс «Exams» – кладезь знаний для ребят-героев, принявших решение
        сдавать английский на ОГЭ и ЕГЭ! Экзамен непростой, и готовиться к нему
        нужно максимально осознанно и серьёзно.
      </p>
      <p style={{ marginTop: "2vh" }}>На курсе мы:</p>
      <ul>
        <li>- повторяем базовые лексико-грамматические темы;</li>
        <li>- очень много тренируемся на официально принятых материалах;</li>
        <li>- "прокачиваем" навыки говорения и письма на английском.</li>
      </ul>
      <p style={{ marginTop: "2vh" }}>
        Ученики, вовремя пришедшие к нам учиться, готовы к экзаменам  ментально
        и морально!
      </p>
    </Fragment>
  );
}
function GraduateRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс «Выпускной русич» рассчитан на ребят 9-го и 11-го классов. Избежать
        сдачи русского языка не получится никак, поэтому лучше на экзамен прийти
        вооружённым до зубов мощными знаниями по русскому языку! Есть пробелы?
        Не переживай! Мы поможем! С нами ты вспомнишь всё, что забыл, и узнаешь
        всё, чего не знал!
      </p>
      <p style={{ marginTop: "2vh" }}>На курсе мы:</p>
      <ul>
        <li>- повторяем базовые грамматические темы;</li>
        <li>- проходим пропущенный в школе материал;</li>
        <li>- очень много тренируемся на официально принятых материалах;</li>
        <li>- "прокачиваем" навыки по написанию изложений и сочинений.</li>
      </ul>
       <p style={{ marginTop: "2vh" }}>Наши ребята всегда готовы!</p>
    </Fragment>
  );
}

const PAGE_DATA = {
  title: "Подготовка к ОГЭ/ЕГЭ для школьников",
  rows: [
    {
      rowTitle: "EXAMS",
      rowId: "exams",
      rowImg: "",
      rowImgAlt: "",
      rowMainDesc: <ExamsRowMainDesc></ExamsRowMainDesc>,
      rowAdditionalDesc: "",
      priceArray: [
        { priceName: "Индивидуальный урок", price: "00" },
        { priceName: "Урок в группе", price: "00" },
      ],
    },
    {
      rowTitle: "ВЫПУСКНОЙ РУСИЧ",
      rowId: "graduateRussian",
      rowImg: "",
      rowImgAlt: "",
      rowMainDesc: <GraduateRowMainDesc></GraduateRowMainDesc>,
      rowAdditionalDesc: "",
      priceArray: [
        { priceName: "Индивидуальный урок", price: "00" },
        { priceName: "Урок в группе", price: "00" },
      ],
    },
  ],
};

function CoursePageExams() {
  return (
    <section className="course-page course-page_exams">
      <CoursePageTitle title={PAGE_DATA.title}></CoursePageTitle>
      {PAGE_DATA.rows.map((row) => (
        <CoursePageRow
          priceArray={row.priceArray}
          {...row}
          key={row.rowId}
        ></CoursePageRow>
      ))}
    </section>
  );
}

export default CoursePageExams;

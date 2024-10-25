import "./CoursePageRuChild.scss";
import {Fragment} from "react";
import CoursePageTitle from "../../CoursePageElements/CoursePageTitle/CoursePageTitle";
import CoursePageRow from "../../CoursePageElements/CoursePageRow/CoursePageRow";

function YouthRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс «Молодой русич» рассчитан на учеников 5-8 классов. В России русский
        – официальный язык, на нём говорят все жители нашей огромной страны. И
        как приятно, когда не просто говорят (открывают рот и производят звуки),
        а говорят грамотно!
      </p>
      <p>
        Курс как глоток свежего воздуха перед государственными экзаменами:
        отлично систематизирует знания.
      </p>
    </Fragment>
  );
}
function YoungRowAdditionalDesc() {
  return (
    <Fragment>
      <p>На курсе мы:</p>
      <ul>
        <li>- учимся красиво писать по-русски;</li>
        <li>- изучаем нормы русского языка;</li>
        <li>- изучаем грамматику;</li>
        <li>- читаем тексты, пишем планы и пересказы;</li>
        <li>- пишем сочинения;</li>
        <li>- выразительно читаем литературные произведения;</li>
        <li>- изучаем элементы ораторского искусства.</li>
      </ul>
      <p style={{marginTop: "2.5vh"}}>
        Ученики нашей студии отличаются не только грамотностью речи, но и
        глубиной мышления, что помогает им успешно учиться в школе не только по
        русскому, но и по другим предметам.
      </p>
    </Fragment>
  );
}
function YouthRowAdditionalDesc() {
  return (
    <Fragment>
      <p>На курсе мы:</p>
      <ul>
        <li>- учимся красиво писать по-русски;</li>
        <li>- изучаем нормы русского языка;</li>
        <li>- изучаем грамматику;</li>
        <li>- читаем тексты, пишем планы и пересказы;</li>
        <li>- пишем сочинения;</li>
        <li>- выразительно читаем литературные произведения;</li>
        <li>- изучаем элементы ораторского искусства.</li>
      </ul>
    </Fragment>
  );
}
function CoolRowAdditionalDesc() {
  return (
    <Fragment>
      <p>На курсе мы:</p>
      <ul>
        <li>- изучаем нормы русского языка;</li>
        <li>- изучаем грамматику;</li>
        <li>- пишем изложения;</li>
        <li>- пишем сочинения;</li>
        <li>- морально готовимся к экзаменам.</li>
      </ul>
       
      <p style={{marginTop: "2.5vh"}}>
        Ученики, выполняющие все требования педагогов студии, успешно сдают
        экзамены по русскому языку и по другим предметам! Удивительные нейронные
        связи создаются в наших светлых головах благодаря грамотно
        организованному учебному процессу!
      </p>
    </Fragment>
  );
}

const PAGE_DATA = {
  title: "Русский язык для школьников",
  rows: [
    {
      rowTitle: "ЮНЫЙ РУСИЧ",
      rowId: "youngRussian",
      rowImg: "src/images/grade1to4.png",
      rowImgAlt: "1-4 класс",
      rowMainDesc:
        "Курс «Юный русич» рассчитан на учеников 1-4 классов. В России русский – официальный язык, на нём говорят все жители нашей огромной страны. И как приятно, когда не просто говорят (открывают рот и производят звуки), а говорят грамотно!",
      rowAdditionalDesc: <YoungRowAdditionalDesc></YoungRowAdditionalDesc>,
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1100"},
        {priceName: "Урок в группе", price: "700"},
      ],
    },
    {
      rowTitle: "МОЛОДОЙ РУСИЧ",
      rowId: "youthRussian",
      rowImg: "src/images/grade5to8.png",
      rowImgAlt: "5-8 класс",
      rowMainDesc: <YouthRowMainDesc></YouthRowMainDesc>,
      rowAdditionalDesc: <YouthRowAdditionalDesc></YouthRowAdditionalDesc>,
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1300"},
        {priceName: "Урок в группе", price: "750"},
      ],
    },
    {
      rowTitle: "КРУТОЙ РУСИЧ",
      rowId: "coolRussian",
      rowImg: "src/images/grade9to11.png",
      rowImgAlt: "9-11 класс",
      rowMainDesc:
        "Курс «Крутой русич» рассчитан на учеников 9-11 классов. Кому-то нравится такая идея, кому-то - нет, но русский язык был, есть и будет обязательным предметом на государственных экзаменах. Чем раньше ты согласишься с этой мыслью и полюбишь русский, тем больше шансов будет у тебя на успешную сдачу экзаменационных испытаний любого уровня!",
      rowAdditionalDesc: <CoolRowAdditionalDesc></CoolRowAdditionalDesc>,
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1500"},
        {priceName: "Урок в группе", price: "800"},
      ],
    },
  ],
};

function CoursePageRuChild() {
  return (
    <section className="course-page course-page_ru-child">
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

export default CoursePageRuChild;

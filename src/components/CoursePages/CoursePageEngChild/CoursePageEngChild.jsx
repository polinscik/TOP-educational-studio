import "./CoursePageEngChild.scss";
import {Fragment} from "react";
import CoursePageTitle from "../../CoursePageElements/CoursePageTitle/CoursePageTitle";
import CoursePageRow from "../../CoursePageElements/CoursePageRow/CoursePageRow";

function JuniorRowAdditionalDesc() {
  return (
    <Fragment>
      <p>На курсе мы:</p>
      <ul>
        <li>- Учимся читать;</li>
        <li>- Учимся писать ПРОПИСЬЮ;</li>
        <li>
          - Изучаем много полезной и интересной детям лексики (животные, фрукты,
          овощи, ягоды и т.д.);
        </li>
        <li>- Изучаем азы грамматики.</li>
      </ul>
      <p>
        Школьная программа после прохождения нашего курса будет вашему ребёнку
        не просто по плечу, она будет ему по колено!
      </p>
    </Fragment>
  );
}
function TeenRowAdditionalDesc() {
  return (
    <Fragment>
      <p>На курсе мы:</p>
      <ul>
        <li>- восполняем пробелы в знаниях;</li>
        <li>
          - "догоняем" школьную программу через развитие базовых навыков
          (чтение, письмо, грамматика);
        </li>
        <li>- учимся говорить по-английски;</li>
        <li>- изучаем тематическую лексику, интересную подросткам.</li>
      </ul>
      <p style={{marginTop: "1.5vh"}}>
        Есть проблемы с английским в школе? Не тяни! Скорее записывайся к нам на
        занятия!
      </p>
    </Fragment>
  );
}
function SuperTeenRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс «Super Teen» разработан для сознательных учеников 9-11 классов,
        желающих:
      </p>
      <ul>
        <li>- "подтянуть" английский;</li>
        <li>- развивать свой английский;</li>
        <li>- использовать английский не только на школьных уроках;</li>
        <li>учиться за границей;</li>
        <li>- успешно сдать ОГЭ по английскому;</li>
        <li>- успешно сдать ЕГЭ по английскому.</li>
      </ul>
    </Fragment>
  );
}
function SuperTeenRowAdditionalDesc() {
  return (
    <Fragment>
      <p style={{marginTop: "1.5vh"}}>На курсе мы:</p> 
      <ul>
        <li>- восполняем пробелы в знаниях;</li>
        <li>- повторяем школьную программу;</li>
        <li>- практикуемся в разговорном английском;</li>
        <li>- изучаем тематическую лексику, интересную молодёжи.</li>
      </ul>
      <p>
        Осознал, что английский пригодится тебе в жизни? Скорее к нам на уроки,
        где будет много практики!
      </p>
    </Fragment>
  );
}

const PAGE_DATA = {
  title: "Английский для школьников",
  rows: [
    {
      rowTitle: "JUNIOR",
      rowId: "juniorEng",
      rowImg: "src/images/grade1to4.png",
      rowImgAlt: "1-4 класс",
      rowMainDesc:
        "Курс «Junior»  имеет целью бесстрессовое знакомство детей с английским языком. Если ребёнок начал изучать язык до второго класса (обычно во втором классе начинается этот предмет в российских школах), шансы на успешное освоение школьной программы возрастают на 250-300 процентов. Это не мифы Древней Греции, это – проверенная опытом статистика.",
      rowAdditionalDesc: <JuniorRowAdditionalDesc></JuniorRowAdditionalDesc>,
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1400"},
        {priceName: "Урок в группе", price: "700"},
      ],
    },
    {
      rowTitle: "TEEN",
      rowId: "teenEng",
      rowImg: "src/images/grade5to8.png",
      rowImgAlt: "5-8 класс",
      rowMainDesc:
        'Курс «Teen», разработанный для подростков 5-8 классов, одной из основных целей имеет оказание срочной грамматической "помощи" ребятам, имеющим пробелы и проблемы с английским в общеобразовательной школе.',
      rowAdditionalDesc: <TeenRowAdditionalDesc></TeenRowAdditionalDesc>,
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1600"},
        {priceName: "Урок в группе", price: "800"},
      ],
    },
    {
      rowTitle: "SUPER TEEN",
      rowId: "superteenEng",
      rowImg: "src/images/grade9to11.png",
      rowImgAlt: "9-11 класс",
      rowMainDesc: <SuperTeenRowMainDesc></SuperTeenRowMainDesc>,
      rowAdditionalDesc: (
        <SuperTeenRowAdditionalDesc></SuperTeenRowAdditionalDesc>
      ),
      priceArray: [
        {priceName: "Индивидуальный урок", price: "1800"},
        {priceName: "Урок в группе", price: "900"},
      ],
    },
  ],
};

function CoursePageEngChild() {
  return (
    <section className="course-page course-page_eng-child">
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

export default CoursePageEngChild;

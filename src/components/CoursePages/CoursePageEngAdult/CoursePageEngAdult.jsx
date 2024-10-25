import "./CoursePageEngAdult.scss";
import {Fragment} from "react";
import CoursePageTitle from "../../CoursePageElements/CoursePageTitle/CoursePageTitle";
import CoursePageRow from "../../CoursePageElements/CoursePageRow/CoursePageRow";

function AdultRowMainDesc() {
  return (
    <Fragment>
      <p>
        Курс «Adult» разработан для взрослых людей, желающих освоить английский
        язык для различных целей: путешествия, бизнес, разговорный английский
        (общее владение).
      </p>
      <p style={{marginTop: "2.5vh"}}>На курсе мы:</p>
      <ul>
        <li>- учимся говорить и писать по-английски;</li>
        <li>- изучаем грамматику по авторским разработкам наших педагогов;</li>
        <li>- встречаемся в разговорном клубе и практикуем свои навыки.</li>
      </ul>
       
      <p style={{marginTop: "2.5vh"}}>
        С нашей студией вы подниметесь на свою новую вершину!
      </p>
    </Fragment>
  );
}

const PAGE_DATA = {
  title: "Английский язык для взрослых",
  rows: [
    {
      rowTitle: "ADULT",
      rowId: "adultEng",
      rowImg: "",
      rowImgAlt: "",
      rowMainDesc: <AdultRowMainDesc></AdultRowMainDesc>,
      rowAdditionalDesc: "",
      priceArray: [
        {priceName: "Индивидуальный урок", price: "2200"},
        {priceName: "Урок в группе", price: "1100"},
      ],
    },
  ],
};

function CoursePageEngAdult() {
  return (
    <section className="course-page course-page_eng-adult">
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

export default CoursePageEngAdult;

import React from 'react';
import './TeachersCards.scss';
import ZakharImage from "../../images/Zakhar.png";
import DianaImage from "../../images/Diana.png";
import ArthurImage from "../../images/Arthur.png";

const teachersData = [
    {
        name: 'Захар',
        image: ZakharImage,
        profession: [
            "ассистент преподавателя",
            "преподаватель английского языка для детей младшего школьного возраста",
            "педагогический стаж – 3 года",
        ],
    },
    {
        name: 'Диана',
        image: DianaImage,
        profession: [
            "дипломированный преподаватель английского языка",
            "преподаватель русского языка",
            "преподаватель русского языка как иностранного",
            "педагогический стаж – 16 лет",
        ],
    },
    {
        name: 'Артур',
        image: ArthurImage,
        profession: [
            "дипломированный преподаватель английского языка",
            "преподаватель музыкальных дисциплин",
            "барабанщик",
            "звукорежиссёр",
            "педагогический стаж – 14 лет",
            "музыкальный стаж – 17 лет",
        ],
    }
];

const TeachersCards = () => {
    return (
        <div className="teachers-container">
            <h2 className='teachers-heading'>Наши преподаватели</h2>
            <div className="cards-container">
                {teachersData.map((teacher) => (
                    <div className="card" key={teacher.name}>
                        <h3 className="teacher-name">{teacher.name}</h3>
                        <img src={teacher.image} alt={teacher.name} className="teacher-image" />
                        <ul className="teacher-profession">
                            {teacher.profession.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachersCards;
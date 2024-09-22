
// import React, { useState } from 'react';
// import './TestimonialsSlider.scss';

// const testimonialsData = [
//     {
//         id: 1,
//         name: 'Владимир',
//         profession: 'Официант',
//         subject: 'Английский язык',
//         review: '"Очень нравится ходить на курсы английского! Преподаватель объясняет доступно, всегда помогает с трудными темами. За два месяца стал намного увереннее говорить."',
//     },
//     {
//         id: 2,
//         name: 'Виктория',
//         profession: 'Школьница',
//         subject: 'Подготовка к ЕГЭ',
//         review: '"Спасибо за помощь в подготовке к ЕГЭ! Занятия структурированные, все по делу. Теперь чувствую себя уверенно перед экзаменом."',
//     },
//     {
//         id: 3,
//         name: 'Никита',
//         profession: 'Студент',
//         subject: 'Английский язык',
//         review: 'На курсах английского я буквально открыл для себя новые горизонты! Раньше всегда стеснялся говорить на английском, но здесь преподаватели сделали всё, чтобы я почувствовал себя комфортно. Очень понравился формат занятий — много разговорной практики, полезные упражнения и индивидуальный подход. Теперь у меня даже появилось желание учить язык дальше!"',
//     },
//     {
//         id: 4,
//         name: 'Лика',
//         profession: 'Домохозяйка',
//         subject: 'Композитор',
//         review: '"Я уже давно интересуюсь созданием музыки, и курс для композиторов стал для меня настоящей находкой! Программа охватывает все — от основ теории музыки до работы в профессиональных музыкальных программах. Преподаватель — практикующий композитор, и это чувствуется, он делится настоящим опытом, ...',
//     },
//     {
//         id: 5,
//         name: 'Олег Васильев',
//         profession: 'Тестировщик',
//         subject: 'QA',
//         review: 'Все отлично, будем обращаться вновь!',
//     },
// ];

// const TestimonialsSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
//     };

//     return (
//         <div className="testimonials-slider">
//             <h2>Отзывы про нас</h2>
//             <div className="testimonials-cards">
//                 {testimonialsData.slice(currentIndex, currentIndex + 4).map((testimonial) => (
//                     <div key={testimonial.id} className="testimonial-card">
//                         <p className="review">{testimonial.review}</p>
//                         <h3 className="name">{testimonial.name}</h3>
//                         <p className="profession">{testimonial.profession}</p>
//                         <p className="subject">{testimonial.subject}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="slider-controls">
//                 <button onClick={prevSlide} className="control-button">←</button>
//                 <button onClick={nextSlide} className="control-button">→</button>
//             </div>
//             <button className="leave-review-button">Оставить отзыв</button>
//         </div>
//     );
// };

// export default TestimonialsSlider;




// import React from "react";
// import Slider from "./SliderForReviews";

// const reviews = [
//     {
//         content: "Очень нравится ходить на курсы английского! Преподаватель объясняет доступно, всегда помогает с трудными темами. За два месяца стал намного увереннее говорить.",
//         name: "Владимир",
//         profession: "Официант",
//         subject: "Английский язык",
//     },
//     {
//         content: "Спасибо за помощь в подготовке к ЕГЭ! Занятия структурированные, все по делу. Теперь чувствую себя уверенно перед экзаменом.",
//         name: "Виктория",
//         profession: "Школьница",
//         subject: "Подготовка к ЕГЭ",
//     },
//     {
//         content: "На курсах английского я буквально открыл для себя новые горизонты! Раньше всегда стеснялся говорить на английском, но здесь преподаватели сделали всё, чтобы я почувствовал себя комфортно. Очень понравился формат занятий — много разговорной практики, полезные упражнения и индивидуальный подход. Теперь у меня даже появилось желание учить язык дальше!",
//         name: "Никита",
//         profession: "Студент",
//         subject: "Английский язык",
//     },
//     {
//         content: "Я уже давно интересуюсь созданием музыки, и курс для композиторов стал для меня настоящей находкой! Программа охватывает все — от основ теории музыки до работы в профессиональных музыкальных программах. Преподаватель — практикующий композитор, и это чувствуется, он делится настоящим опытом, ...",
//         name: "Лика",
//         profession: "Домохозяйка",
//         subject: "Композитором",
//     },
// ];

// const Reviews = () => {
//     return (
//         <div className="reviews">
//             <h2>ОТЗЫВЫ О НАС</h2>
//             <Slider slides={reviews} />
//             <button className="reviews-leave-btn">
//                 Оставить отзыв
//             </button>
//         </div>
//     );
// };

// export default Reviews;

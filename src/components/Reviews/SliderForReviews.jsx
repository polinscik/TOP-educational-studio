import React, { useState } from "react";

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 4;

    const nextSlide = () => {
        if (currentSlide === slides.length - slidesToShow) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - slidesToShow);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="reviews-slider">
            {slides.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className="review-card"
                        style={{ transform: `translateX(${index * -100}%)` }}
                    >
                        <p>{slide.content}</p>
                        <div className="review-meta">
                            <span>{slide.name}</span>
                            <span>{slide.profession}</span>
                            <span>{slide.subject}</span>
                        </div>
                    </div>
                );
            })}
            <button className="reviews-prev-btn" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <button className="reviews-next-btn" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L12.586 10l-4.293 4.293a1 1 0 000 1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default Slider;

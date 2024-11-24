import React from 'react';
import './Telegram.scss';
import stars from "../../images/stars.svg";
import gray_rectangle from "../../images/gray_rectangle.svg";
import iPhone from '../../images/iphone.svg';

const Telegram = () => {

    const handleSubscribe = () => {
        window.open('https://t.me/TOP_studio_38', '_blank');  
    }; 

    return (
        <div className="telegram-container">
            <div className="gray-rectangle">
                <img src={gray_rectangle} alt="Gray Rectangle" className="rectangle" />
                <img src={stars} alt="Stars" className="stars" />
                <div className="content">
                    <img src={iPhone} alt="iPhone" className="iphone" />
                    <div className="text-block">
                        <p className="text-1">Хочешь всегда быть в курсе новостей нашей студии?</p>
                        <p className="text-2">Подписывайся на наш Telegram-канал!</p>
                        <p className="text-3">Получай ценные советы, свежие материалы и вдохновение для развития каждый день. Прокачивай себя вместе с нами!</p>
                        <div className="subscribe__button">
                        <button className="subscribe__btn" onClick={handleSubscribe}>
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Telegram;


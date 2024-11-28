import React from 'react';
import './Telegram.scss';
import iPhone from '../../images/iphone.svg';

const Telegram = () => {

    const handleSubscribe = () => {
        window.open('https://t.me/TOP_studio_38', '_blank');
    };

    return (
        <div className="telegram-container">
            <div className="telegram-content">
                <div className="telegram-image">
                    <img src={iPhone} alt="iPhone" />
                </div>
                <div className="telegram-text-block">
                    <p className="text-1">Хочешь всегда быть в курсе новостей нашей студии?</p>
                    <p className="text-2">Подписывайся на наш Telegram-канал!</p>
                    <p className="text-3">Получай ценные советы, свежие материалы и вдохновение для развития каждый день. Прокачивай себя вместе с нами!</p>
                    <div className="telegram-btn">
                        <button className="subscribe-btn" onClick={handleSubscribe}>
                            <span>Подписаться</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Telegram;


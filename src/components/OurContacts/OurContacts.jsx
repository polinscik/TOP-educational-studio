import React from 'react';
import './OurContacts.scss';

const OurContacts = () => {
    return (
        <div className="our-contacts">
            <h2 className="our-contact-heading" id="our-contact-title">Наши контакты</h2>
            <div className="contact-content">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8758771693865!2d104.25448307627784!3d52.26379897199517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da823573d93115d%3A0xecb8332561174cd9!2z0YPQuy4g0JPRgNC40LHQvtC10LTQvtCy0LAsIDEwOCwg0JjRgNC60YPRgtGB0LosINCY0YDQutGD0YLRgdC60LDRjyDQvtCx0LsuLCA2NjQwNzQ!5e0!3m2!1sru!2sru!4v1732485708541!5m2!1sru!2sru"
                        width="560"
                        height="448"
                        style={{ border: 0, borderRadius: '0.4rem' }} 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact-details">
                    <h3 className="contact-address-heading">Адрес</h3>
                    <p className="contact-address">Иркутская область, Иркутск, ул. Грибоедова, 108</p>
                    <p className="contact-phone">+79027617966</p>
                    <div className="contact-telegram">
                        <p className="telegram-question">Появились вопросы?</p>
                        <p className="telegram-text">
                            <a href="https://t.me/TOP_studio_38" target="_blank" rel="noopener noreferrer">
                                Напиши нам в телеграм!
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurContacts;
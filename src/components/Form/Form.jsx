import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

export default function Form() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const [Message, setMessage] = useState("");

    const onSubmit = async (data, e) => {
        console.log(data);
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data, null, 2),
        })
            .then(async (response) => {
                let json = await response.json();
                if (json.success) {
                    setIsSuccess(true);
                    setMessage(json.message);
                    e.target.reset();
                    reset();
                } else {
                    setIsSuccess(false);
                    setMessage(json.message);
                }
            })
            .catch((error) => {
                setIsSuccess(false);
                setMessage("Client Error. Please check the console.log for more info");
                console.log(error);
            });
    };

    return (
        <section className="section-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="hidden"
                    value="75486066-59bd-4cb2-bfb8-4a3e90dde730"
                    // value="API_KEY"
                    {...register("access_key")}
                />
                <input
                    type="hidden"
                    value="Новая заявка с сайта"
                    {...register("subject")}

                />
                <input
                    type="checkbox"
                    id=""
                    className="hidden"
                    style={{ display: "none" }}
                    {...register("botcheck")}
                />

                <h4 className="form__title">Записаться на&nbsp;консультацию</h4>
                <p className="form__subtitle">Заполните форму, и мы свяжемся с&nbsp;Вами в ближайшее время</p>
                <input
                    className={`form__input ${errors.name ? "border-red" : null}`}
                    type="text"
                    placeholder="Имя*"
                    {...register("name", { required: true, minLength: 3, maxLength: 30, pattern: /^[А-Яа-яA-Za-z\s]+$/i })}
                />
                <input
                    className={`form__input ${errors.email ? "border-red" : null}`}
                    type="text"
                    placeholder="Email*"
                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                />
                <input
                    className={`form__input ${errors.mobileNumber ? "border-red" : null}`}
                    type="tel"
                    placeholder="Телефон*"
                    {...register("mobileNumber", { required: true, minLength: 10, maxLength: 15, pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ })}
                />

                <select className={`form__input select ${errors.course ? "border-red" : null}`}
                    {...register("course", { required: true })}>
                    <option value="">Выбор курса*</option>
                    <option value="Индивидуальный Junior">Индивидуальный Junior</option>
                    <option value="Групповой Junior">Групповой Junior</option>
                </select>

                <select className={`form__input select ${errors.format ? "border-red" : null}`}
                    {...register("format", { required: true })}>
                    <option value="">Формат обучения*</option>
                    <option value="Очный">Очный</option>
                    <option value="Онлайн">Онлайн</option>
                </select>

                <textarea className="form__input textarea" placeholder="Комментарий" {...register("comment")} />

                <div className="personal-data-terms">
                    <input
                        className={`personal-data-terms__checkbox 
                            ${errors.personalDataTerms ? "border-red" : null}`}
                        type="checkbox"
                        id="personalDataTerms"
                        {...register("personalDataTerms", { required: true })}
                    />
                    <label className="personal-data-terms__label" htmlFor="personalDataTerms">
                        Я согласен с <a className="personal-data-terms__link">обработкой персональных данных</a>
                    </label>
                </div>

                {(errors.name || errors.email || errors.mobileNumber || errors.course || errors.format || errors.personalDataTerms) && <p className="error-message">Заполните все необходимые поля</p>}

                {isSubmitSuccessful && !isSuccess && (
                    <p className="submit-error-message">Ошибка при отправке формы</p>
                )}

                <button className={(isSubmitSuccessful && isSuccess) ? "form__submit-btn_gold" : "form__submit-btn"} type="submit">
                    {(isSubmitSuccessful && isSuccess)
                        ? <span className="btn-name_sent">Отправлено!</span>
                        : <span className="btn-name">Записаться</span>
                    }
                </button>
            </form>


        </section>
    );
}
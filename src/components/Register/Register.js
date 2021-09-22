import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register-logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="register-name">
              Имя
            </label>
            <input
              className="register__input"
              id="register-name"
              name="register-name"
              type="text"
              value="Виталий"
            />
            <span className="register__error">Что-то пошло не так...</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="register-email">
              E-mail
            </label>
            <input
              className="register__input"
              id="register-email"
              name="register-email"
              type="text"
              value="pochta@yandex.ru"
            />
            <span className="register__error">Что-то пошло не так...</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="register-password">
              Пароль
            </label>
            <input
              className="register__input register__input_error"
              id="register-password"
              name="register-password"
              type="password"
              value="123456789"
            />
            <span className="register__error register__error_active">
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className="register__button">Зарегистрироваться</button>
        </form>
        <span className="register__signin-label">
          Уже зарегестрированы?
          <Link to="/sign-in" className="register__login">
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
}

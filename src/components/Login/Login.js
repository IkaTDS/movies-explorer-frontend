import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login-logo" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <fieldset className="login__fieldset">
            <label className="login__label" htmlFor="login-email">
              E-mail
            </label>
            <input
              className="login__input"
              id="login-email"
              name="login-email"
              type="text"
              value="pochta@yandex.ru"
            />
            <span className="login__error">Что-то пошло не так...</span>
          </fieldset>
          <fieldset className="login__fieldset">
            <label className="login__label" htmlFor="login-password">
              Пароль
            </label>
            <input
              className="login__input login__input_error"
              id="login-password"
              name="login-password"
              type="password"
              value=""
            />
            <span className="login__error login__error_active">
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className="login__button">Войти</button>
        </form>
        <span className="login__signin-label">
          Ещё не зарегестрированы?
          <Link to="/sign-in" className="login__register">
            Регистрация
          </Link>
        </span>
      </div>
    </section>
  );
}

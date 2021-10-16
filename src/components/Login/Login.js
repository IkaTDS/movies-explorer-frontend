import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";

export default function Login({onSignIn}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn({
      email: values['login-email'],
      password: values['login-password'],
    });
    resetForm();
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login-logo" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <fieldset className="login__fieldset">
            <label className="login__label" htmlFor="login-email">
              E-mail
            </label>
            <input
              className={`login__input ${errors["login-email"] ? "register__login_error" : ""}`}
              id="login-email"
              name="login-email"
              type="text"
              value={values.email}
              onChange={handleChange}
              pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <span className={`login__error ${errors["login-email"] ? "login__error_active" : ""}`}>{errors["login-email"] || ""}</span>
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
              value={values.password}
              onChange={handleChange}
              required
            />
            <span className={`login__error ${errors["login-password"] ? "login__error_active" : ""}`}>{errors["login-password"] || ""}</span>
          </fieldset>
          <button className={`login__button ${!isValid ? "login__button_error" : ""}`} disabled={!isValid} type="submit">Войти</button>
        </form>
        <span className="login__signin-label">
          Ещё не зарегестрированы?
          <Link to="/signup" className="login__register">
            Регистрация
          </Link>
        </span>
      </div>
    </section>
  );
}

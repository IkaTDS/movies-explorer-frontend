import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";

export default function Login({onSignIn}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn({
      email: values.email,
      password: values.password,
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
            <label className="login__label" htmlFor="email">
              E-mail
            </label>
            <input
              className={`login__input ${errors.email ? "register__login_error" : ""}`}
              id="email"
              name="email"
              type="text"
              value={values.email || ""}
              onChange={handleChange}
              pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <span className={`login__error ${errors.email ? "login__error_active" : ""}`}>{errors.email || ""}</span>
          </fieldset>
          <fieldset className="login__fieldset">
            <label className="login__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="login__input login__input_error"
              id="password"
              name="password"
              type="password"
              value={values.password || ""}
              onChange={handleChange}
              required
            />
            <span className={`login__error ${errors.password ? "login__error_active" : ""}`}>{errors.password || ""}</span>
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

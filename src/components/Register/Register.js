import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";

export default function Register({onSignUp, signUpErrorMessage}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSignUp({
      name: values['register-name'],
      email: values['register-email'],
      password: values['register-password'],
    });
    resetForm();
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register-logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="register-name">
              Имя
            </label>
            <input
              className={`register__input ${errors["register-name"] ? "register__input_error" : ""}`}
              onChange={handleChange}
              id="register-name"
              name="register-name"
              type="text"
              value={values.name}
              minLength='2'
              pattern="^[а-яА-ЯЁёa-zA-Z\s\-]+$"
              required
            />
            <span className={`register__error ${errors["register-name"] ? "register__error_active" : ""}`}>{errors["register-name"] || ""}</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="register-email">
              E-mail
            </label>
            <input
              className={`register__input ${errors["register-email"] ? "register__input_error" : ""}`}
              onChange={handleChange}
              id="register-email"
              name="register-email"
              type="text"
              value={values.email}
              pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <span className={`register__error ${errors["register-email"] ? "register__error_active" : ""}`}>{errors["register-email"] || ""}</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="register-password">
              Пароль
            </label>
            <input
              className="register__input register__input_error"
              onChange={handleChange}
              id="register-password"
              name="register-password"
              type="password"
              value={values.password}
              required
            />
            <span className={`register__error ${errors["register-password"] ? "register__error_active" : ""}`}>{errors["register-password"] || ""}</span>
          </fieldset>
          <span className={`register__submit-error ${signUpErrorMessage ? "register__submit-error_active" : ""}`}>{signUpErrorMessage}</span>
          <button className={`register__button ${!isValid ? "register__button_error" : ""}`} disabled={!isValid} type="submit">
            Зарегистрироваться
          </button>
        </form>
        <span className="register__signin-label">
          Уже зарегестрированы?
          <Link to="/signin" className="register__login">
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
}

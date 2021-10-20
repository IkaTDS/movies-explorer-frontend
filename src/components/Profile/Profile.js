import React from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function Profile({ onEdit, onSignOut, updateUserMessage }) {
  const { values, handleChange, errors, isValid, setValues } =
    useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isChanged, setIsChanged] = React.useState(false);

  React.useEffect(() => {
    if (currentUser && currentUser.name && currentUser.email) {
      setValues({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser, setValues]);

  React.useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [currentUser, values]);

  function handleSubmit(e) {
    e.preventDefault();
    onEdit({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__container profile__name-container">
          <div className="profile__form-row">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              className={`profile__input ${
                errors.name ? "profile__input_error" : ""
              }`}
              id="name"
              name="name"
              type="text"
              value={values.name || ""}
              onChange={handleChange}
              minLength="2"
              pattern="^[а-яА-ЯЁёa-zA-Z\s\-]+$"
              required
            />
          </div>
          <span
            className={`profile__error ${
              errors.name ? "profile__error_active" : ""
            }`}
          >
            {errors.name || "Ошибка"}
          </span>
        </fieldset>
        <fieldset className="profile__container profile__email-container">
          <div className="profile__form-row">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input
              className={`profile__input ${
                errors.email ? "profile__input_error" : ""
              }`}
              id="email"
              name="email"
              type="text"
              value={values.email || ""}
              onChange={handleChange}
              minLength="2"
              pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <span
            className={`profile__error ${
              errors.email ? "profile__error_active" : ""
            }`}
          >
            {errors.email || "Ошибка"}
          </span>
        </fieldset>
        <span className={`profile__submit-message ${updateUserMessage ? "profile__submit-message_active" : ""}`}>{updateUserMessage}</span>
        <button
          className={`profile__edit-button ${
            !isValid || !isChanged ? "profile__edit-button_error" : ""
          }`}
          disabled={!isValid || !isChanged}
          type="submit"
        >
          Редактировать
        </button>
        <button className="profile__exit-button" onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

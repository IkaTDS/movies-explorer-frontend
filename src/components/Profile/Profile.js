import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <fieldset className="profile__container profile__name-container">
          <label className="profile__label" htmlFor="profile-name">
            Имя
          </label>
          <input
            className="profile__input"
            id="profile-name"
            name="profile-name"
            type="text"
            value="Виталий"
          />
        </fieldset>
        <fieldset className="profile__container profile__email-container">
          <label className="profile__label" htmlFor="profile-email">
            E-mail
          </label>
          <input
            className="profile__input"
            id="profile-email"
            name="profile-email"
            type="text"
            value="pochta@yandex.ru"
          />
        </fieldset>

        <button className="profile__edit-button">Редактировать</button>
        <button className="profile__exit-button">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

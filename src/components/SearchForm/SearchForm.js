import React from "react";
import "./SearchForm.css";
import Thulmbler from "../Thumbler/Thumbler";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className="search-form__input-label" htmlFor="movie"></label>
        <input
          className="search-form__input"
          placeholder="Фильм"
          required
          id="movie"
          name="movie"
        />
        <button className="search-form__button">Найти</button>
        <div className="search-form__thumbler-container">
          <Thulmbler />
          <label className="search-form__thumbler-label" htmlFor="short-movie">
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}

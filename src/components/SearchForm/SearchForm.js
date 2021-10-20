import React from "react";
import "./SearchForm.css";
import Thulmbler from "../Thumbler/Thumbler";
import { useLocation } from "react-router-dom";

export default function SearchForm(props) {
  const [keyWord, setKeyWord] = React.useState("");
  const { checkShortMovies, isShortMoviesFiltred, searchSavedMovies, setIsChecked } = props;
  const Location = useLocation();
  const savedMoviesLocation = Location.pathname === "/saved-movies";
  const moviesLocation = Location.pathname === "/movies";
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  function handleChangeKeyword(e) {
    setKeyWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (savedMoviesLocation) {
      searchSavedMovies(keyWord);
    } else if (moviesLocation) {
      props.searchFilm(keyWord);
    }
  }

  function handleThumblerOn(check) {
    // checkShortMovies(check);
    // props.searchFilm(keyWord);
    setIsShortMovies(check);
    setIsChecked(!isShortMovies);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <label className="search-form__input-label" htmlFor="movie"></label>
        <input
          className="search-form__input"
          placeholder="Фильм"
          required
          id="movie"
          name="movie"
          onChange={handleChangeKeyword}
        />
        <button className="search-form__button" onClick={handleSubmit}>
          Найти
        </button>
        <div className="search-form__thumbler-container">
          <Thulmbler
            thumblerOn={handleThumblerOn}
            isShortMoviesFiltred={isShortMoviesFiltred}
          />
          <label className="search-form__thumbler-label" htmlFor="short-movie">
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}

import React from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard(props) {
  const { nameRU, duration } = props.movie;
  const { savedMovies, likeMovie, deleteMovie } = props;
  const location = useLocation();
  const savedMovieLocation = location.pathname === "/saved-movies";
  const movieIsSaved = savedMovies.some((i) => i.movieId === props.movie.id);
  const image = !savedMovieLocation
    ? `https://api.nomoreparties.co${props.movie.image.url}`
    : `${props.movie.image}`;

  function durationOptimization(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  function handleLike() {
    likeMovie(movieIsSaved, props.movie);
  }

  function handleDeleteMovie() {
    deleteMovie(props.movie);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__description-container">
          <h2 className="movies-card__title">{nameRU}</h2>
          <span className="movies-card__duration">
            {durationOptimization(duration)}
          </span>
        </div>
        <div className="movies-card__button-container">
          <Switch>
            <Route path="/movies">
              <button
                className={`movies-card__saved movies-card__saved_hovered ${
                  movieIsSaved ? "movies-card__saved_active" : ""
                }`}
                onClick={handleLike}
              />
            </Route>
            <Route path="/saved-movies">
              <button
                type="button"
                className={`movies-card__delete-card`}
                onClick={handleDeleteMovie}
              />
            </Route>
          </Switch>
        </div>
      </div>
      <img className="movies-card__image" src={image} alt="изображение" />
    </div>
  );
}

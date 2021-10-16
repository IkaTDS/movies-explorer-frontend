import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const { filteredMovies, shownMovies, moreMovies, savedMovies, likeMovie, checkSaveStatus, deleteMovie, savedMoviesToShow } = props;
  const location = useLocation();

  function showMoreMovies() {
    moreMovies();
  }

  return (
    <>
      <div className="card-list">
        <Switch>
          <Route path="/movies">
            {location.pathname === "/movies" &&
              shownMovies.map((movie) => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  likeMovie={likeMovie}
                  savedMovies={savedMovies}
                  checkSaveStatus={checkSaveStatus}
                />
              ))}
          </Route>
          <Route path="/saved-movies">
            {location.pathname === "/saved-movies" &&
              savedMoviesToShow.map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  likeMovie={likeMovie}
                  savedMovies={savedMovies}
                  deleteMovie={deleteMovie}
                  checkSaveStatus={checkSaveStatus}
                />
              ))}
          </Route>
        </Switch>
      </div>
      {location.pathname === "/movies" && (
        <div className="card-list__button-container">
          <button
            type="button"
            className={`card-list__more-button ${
              shownMovies.length === filteredMovies.length
                ? "card-list__more-button_hidden"
                : ""
            }`}
            onClick={showMoreMovies}
          >
            Ещё
          </button>
        </div>
      )}
    </>
  );
}

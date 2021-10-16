import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies(props) {
  const {
    movies,
    isLoading,
    searchFilm,
    filteredMovies,
    message,
    isFilmsNotFoundShown,
    moviesIsShown,
    moreMovies,
    savedMovies,
    likeMovie,
    checkShortMovies,
    isShortMoviesFiltred,
  } = props;
  const shownMovies = filteredMovies.slice(0, moviesIsShown);

  return (
    <div className="movies">
      <SearchForm
        searchFilm={searchFilm}
        checkShortMovies={checkShortMovies}
        isShortMoviesFiltred={isShortMoviesFiltred}
      />
      <Preloader
        isLoading={isLoading}
        isFilmsNotFoundShown={isFilmsNotFoundShown}
      />
      <MoviesCardList
        movies={movies}
        shownMovies={shownMovies}
        filteredMovies={filteredMovies}
        message={message}
        moviesIsShown={moviesIsShown}
        moreMovies={moreMovies}
        savedMovies={savedMovies}
        likeMovie={likeMovie}
      />
    </div>
  );
}

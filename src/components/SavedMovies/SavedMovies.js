import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies(props) {
  const {
    isLoading,
    savedMovies,
    currentUserMovies,
    deleteMovie,
    checkSaveStatus,
    searchFilm,
    checkShortMovies,
    searchSavedMovies,
    filteredSavedMovies,
    isShortMoviesFiltred,
    isFilmsNotFoundShown,
  } = props;
//   const savedMoviesToShow = filteredSavedMovies.length === 0 ? savedMovies : filteredSavedMovies
  const savedMoviesToShow = filteredSavedMovies

  return (
    <div>
      <SearchForm
        searchFilm={searchFilm}
        checkShortMovies={checkShortMovies}
        searchSavedMovies={searchSavedMovies}
        filteredSavedMovies={filteredSavedMovies}
        isShortMoviesFiltred={isShortMoviesFiltred}
      />
      <Preloader isLoading={isLoading} isFilmsNotFoundShown={isFilmsNotFoundShown} />
      <MoviesCardList
        savedMovies={savedMovies}
        currentUserMovies={currentUserMovies}
        deleteMovie={deleteMovie}
        checkSaveStatus={checkSaveStatus}
        savedMoviesToShow={savedMoviesToShow}
      />
    </div>
  );
}

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
    sortShortMovies
  } = props;

  const [shortMovies, setShortMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

//   const savedMoviesToShow = filteredSavedMovies.length === 0 ? savedMovies : filteredSavedMovies
  const savedMoviesToShow = filteredSavedMovies

  React.useEffect(() => {
    if (isChecked) {
      setShortMovies(sortShortMovies(savedMovies));
    }
  }, [isChecked])

  return (
    <div>
      <SearchForm
        searchFilm={searchFilm}
        checkShortMovies={checkShortMovies}
        searchSavedMovies={searchSavedMovies}
        filteredSavedMovies={filteredSavedMovies}
        isShortMoviesFiltred={isShortMoviesFiltred}
        setIsChecked={setIsChecked}
      />
      <Preloader isLoading={isLoading} isFilmsNotFoundShown={isFilmsNotFoundShown} />
      <MoviesCardList
        currentUserMovies={currentUserMovies}
        deleteMovie={deleteMovie}
        checkSaveStatus={checkSaveStatus}
        savedMoviesToShow={savedMoviesToShow}
        savedMovies={isChecked ? shortMovies : savedMovies}
      />
    </div>
  );
}

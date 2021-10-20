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
    sortShortMovies,
    moreShortMovies,
    shortMoviesIsShown,
  } = props;

  const [shortMovies, setShortMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  const shownMovies = filteredMovies.slice(0, moviesIsShown);
  const shownShortMovies = shortMovies.slice(0, shortMoviesIsShown);

  React.useEffect(() => {
    if (isChecked) {
      setShortMovies(sortShortMovies(filteredMovies));
    }
  }, [isChecked])

  return (
    <div className="movies">
      <SearchForm
        searchFilm={searchFilm}
        checkShortMovies={checkShortMovies}
        isShortMoviesFiltred={isShortMoviesFiltred}
        setIsChecked={setIsChecked}
      />
      <Preloader
        isLoading={isLoading}
        isFilmsNotFoundShown={isFilmsNotFoundShown}
      />
      <MoviesCardList
        movies={movies}
        filteredMovies={filteredMovies}
        message={message}
        moviesIsShown={moviesIsShown}
        moreMovies={isChecked ? moreShortMovies : moreMovies}
        savedMovies={savedMovies}
        likeMovie={likeMovie}
        shownMovies={isChecked ? shownShortMovies : shownMovies}
      />
    </div>
  );
}

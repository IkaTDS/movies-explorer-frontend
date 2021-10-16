import React from "react";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import useWindowDimensions from "../../utils/WindowDemension";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  // const [isPageIsLoading, setPageIsLoading] = React.useState(true);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [moviesIsShown, setMoviesIsShown] = React.useState(7);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isFilmsNotFoundShown, setFilmsNotFoundShown] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();
  const { width, height } = useWindowDimensions();
  const [moviesIsShownCount, setMoviesIsShownCount] = React.useState(7);
  const [isShortMoviesFiltred, setShortMoviesFiltred] = React.useState(false);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  let location = useLocation();

  React.useEffect(() => {
    if (width >= 480) {
      setMoviesIsShown(7);
      setMoviesIsShownCount(7);
    } else if (width < 480) {
      setMoviesIsShown(5);
      setMoviesIsShownCount(5);
    }
  }, [width]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      mainApi
        .checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
          history.push(location)
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  }, [isLoading]);

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem("savedMovies", JSON.stringify(movies));
          setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
          setFilteredSavedMovies(
            JSON.parse(localStorage.getItem("savedMovies"))
          );
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    moviesApi
      .getMovies()
      .then((movies) => {
        setLoading(true);
        localStorage.setItem("movies", JSON.stringify(movies));
        setMovies(movies);
        if (localStorage.getItem("filteredMovies")) {
          setFilteredMovies(JSON.parse(localStorage.getItem("filteredMovies")));
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, [moviesIsShownCount]);

  function handleSearchSavedMovies(keyWord) {
    const movies = JSON.parse(localStorage.getItem("savedMovies"));
    if (!keyWord) {
      setFilteredSavedMovies([]);
      return;
    }
    setFilteredSavedMovies(filterMoviesArray(movies, keyWord));
    localStorage.setItem(
      "filteredSavedMovies",
      JSON.stringify(filterMoviesArray(movies, keyWord))
    );
  }

  function checkSaveStatus(movie) {
    return savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  }

  function checkShortMovies(thumblerCheck) {
    setShortMoviesFiltred(thumblerCheck);
  }

  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  }

  function handleEditProfile(updatedUserInfo) {
    mainApi
      .editUser(updatedUserInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function handleSignUp(data) {
    mainApi
      .register(data)
      .then((res) => {
        if (res) {
          mainApi
            .login(data)
            .then((res) => {
              mainApi
                .checkToken(res.token)
                .then(() => {
                  setSignUpErrorMessage("");
                  setLoggedIn(true);
                  localStorage.setItem("token", res.token);
                  history.push("/movies");
                })
                .catch((err) => {
                  console.log(`${err}`);
                });
            })
            .catch((err) => {
              console.log(`${err}`);
            });
        }
      })
      .catch((err) => {
        setSignUpErrorMessage(`${err}`);
        console.log(`${err}`);
      });
  }

  function handleSignIn(data) {
    setLoading(true);
    mainApi
      .login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        history.push("/movies");
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function saveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function deleteMovie(movie) {
    const movieId = savedMovies.find(
      (i) => i.movieId === movie.movieId || movie.id
    )._id;
    console.log(movieId);
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c.movieId !== movieId));
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function hadleLikeMovie(movieIsSaved, movie) {
    movieIsSaved ? deleteMovie(movie) : saveMovie(movie);
  }

  function handleShowMoreMovies() {
    setMoviesIsShown(moviesIsShown + moviesIsShownCount);
  }

  function filterMoviesArray(movies, keyword) {
    if (!keyword) {
      return [];
    }
    const filteredMovies = !isShortMoviesFiltred
      ? movies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        )
      : movies.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
            movie.duration <= 40
        );
    setFilteredMovies(filteredMovies);

    if (filteredMovies.length === 0) {
      setFilmsNotFoundShown(true);
    } else {
      setFilmsNotFoundShown(false);
    }

    return filteredMovies;
  }

  function handleSearchFilm(keyword) {
    const movies = JSON.parse(localStorage.getItem("movies"));

    if (!keyword) {
      setFilteredMovies([]);
    }
    setFilteredMovies(filterMoviesArray(movies, keyword));
    localStorage.setItem(
      "filteredMovies",
      JSON.stringify(filterMoviesArray(movies, keyword))
    );
  }

  function handleBurgerButtonClick() {
    setBurgerMenuOpen(true);
  }

  function handleBurgerCloseButtonClick() {
    setBurgerMenuOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <>
          <Switch>
            <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
              <Header
                isBurgerMenuOpen={isBurgerMenuOpen}
                burgerMenuOpen={handleBurgerButtonClick}
                burgerMenuClose={handleBurgerCloseButtonClick}
                isLoggedIn={isLoggedIn}
              />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
              <Movies
                movies={movies}
                isLoading={isLoading}
                searchFilm={handleSearchFilm}
                filteredMovies={filteredMovies}
                message={message}
                deleteMovie={deleteMovie}
                isFilmsNotFoundShown={isFilmsNotFoundShown}
                moviesIsShown={moviesIsShown}
                moreMovies={handleShowMoreMovies}
                likeMovie={hadleLikeMovie}
                savedMovies={savedMovies}
                checkSaveStatus={checkSaveStatus}
                checkShortMovies={checkShortMovies}
                isShortMoviesFiltred={isShortMoviesFiltred}
              />
            </ProtectedRoute>

            <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
              <SavedMovies
                savedMovies={savedMovies}
                isLoading={isLoading}
                deleteMovie={deleteMovie}
                isFilmsNotFoundShown={isFilmsNotFoundShown}
                searchFilm={handleSearchFilm}
                checkShortMovies={checkShortMovies}
                filteredSavedMovies={filteredSavedMovies}
                searchSavedMovies={handleSearchSavedMovies}
                isShortMoviesFiltred={isShortMoviesFiltred}
              />
            </ProtectedRoute>

            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile onEdit={handleEditProfile} onSignOut={handleSignOut} />
            </ProtectedRoute>

            <Route path="/signup">
              <Register
                onSignUp={handleSignUp}
                signUpErrorMessage={signUpErrorMessage}
              />
            </Route>

            <Route path="/signin">
              <Login onSignIn={handleSignIn} />
            </Route>

            <Route path="/not-found">
              <NotFound />
            </Route>

            <Route path="*">
              <Redirect to="/not-found" />
            </Route>
          </Switch>
          <Switch>
            <Route exact path={["/", "/movies", "/saved-movies"]}>
              <Footer />
            </Route>
          </Switch>
        </>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

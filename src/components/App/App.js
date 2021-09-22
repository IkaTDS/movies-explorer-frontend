import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import Header from "../Header/Header";
import React from "react";
import NotFound from "../NotFound/NotFound";

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function handleBurgerButtonClick() {
    setBurgerMenuOpen(true);
  }

  function handleBurgerCloseButtonClick() {
    setBurgerMenuOpen(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
          <Header
            isBurgerMenuOpen={isBurgerMenuOpen}
            burgerMenuOpen={handleBurgerButtonClick}
            burgerMenuClose={handleBurgerCloseButtonClick}
          />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
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
    </div>
  );
}

export default App;

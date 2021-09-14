import React from "react";
import { NavLink, Link, Route, Switch, useLocation } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const location = useLocation();  
  return (
    <header className={`header ${location.pathname !== '/' ? 'header_white' : ''}`}>
      <Link to="/" className="header-logo" />

      <Switch>
        <Route exact path="/">
          <nav className="header__menu">
            <Link to="/signup" className="header__signup-button">
              Регистрация
            </Link>

            <Link to="/signin" className="header__signin-button">
              Войти
            </Link>
          </nav>
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <div className="header__navigation">
            <NavLink
              to="/movies"
              className="header__link"
              activeClassName="header__link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__link"
              activeClassName="header__link_active"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <Link to="/profile" className="header__profile-link">
            Аккаунт
          </Link>
          <button
            className="header__burger-button"
            onClick={props.burgerMenuOpen}
          ></button>

          <div
            className={`header__burger-container ${
              props.isBurgerMenuOpen ? "header__burger-container_opened" : ""
            }`}
          >
            <div
              className={`header__burger-menu ${
                props.isBurgerMenuOpen ? "header__burger-menu_opened" : ""
              }`}
            >
              <button
                className="header__burger-close-button"
                onClick={props.burgerMenuClose}
              ></button>
              <nav className="header__burger-navigation">
                <NavLink
                  exact
                  to="/"
                  className="header__burger-link"
                  activeClassName="header__burger-link_active"
                  onClick={props.burgerMenuClose}
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/movies"
                  className="header__burger-link"
                  activeClassName="header__burger-link_active"
                  onClick={props.burgerMenuClose}
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className="header__burger-link"
                  activeClassName="header__burger-link_active"
                  onClick={props.burgerMenuClose}
                >
                  Сохраненные фильмы
                </NavLink>
              </nav>
              <Link
                to="/profile"
                className="header__profile-link header__profile-link_burger"
                onClick={props.burgerMenuClose}
              >
                Аккаунт
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;

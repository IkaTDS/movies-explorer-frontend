import React from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import "./MoviesCard.css";
import image from "../../images/movies-card-img.png";

export default function MoviesCard(props) {
  const { movieIsSaved } = props;
  const location = useLocation();
  const savedMovieLocation = location.pathname === "/saved-movies";
  return (
    <div
      className={`movies-card ${
        savedMovieLocation && !movieIsSaved ? "movies-card_hidden" : ""
      }`}
    >
      <div className="movies-card__description">
        <div className="movies-card__description-container">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <span className="movies-card__duration">1ч 42м</span>
        </div>
        <div className="movies-card__button-container">
          <Switch>
            <Route path="/movies">
              <button
                className={`movies-card__saved movies-card__saved_hovered ${
                  movieIsSaved ? "movies-card__saved_active" : ""
                }`}
              />
            </Route>
            <Route path="/saved-movies">
              <button type="button" className={`movies-card__delete-card`} />
            </Route>
          </Switch>
        </div>
      </div>
      <img className="movies-card__image" src={image} alt="изображение" />
    </div>
  );
}

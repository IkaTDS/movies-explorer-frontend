import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="portfolio__link">Статичный сайт</Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link">Адаптивный сайт</Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link">Одностраничное приложение</Link>
        </li>
      </ul>
    </div>
  );
}

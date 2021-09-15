import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="portfolio__link" to="#" target="_blank">
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link" to="#" target="_blank">
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link" to="#" target="_blank">
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
}

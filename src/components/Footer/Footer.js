import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__content">
        <span className="footer__year">&copy; 2020</span>
        <ul className="footer__list">
          <li className="footer__item">
            <Link
              className="footer__link"
              to="https://praktikum.yandex.ru"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__item">
            <Link
              className="footer__link"
              to="https://github.com/"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li className="footer__item">
            <Link
              className="footer__link"
              to="https://facebook.com/"
              target="_blank"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

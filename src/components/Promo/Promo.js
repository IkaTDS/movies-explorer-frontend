import React from "react";
import { Link } from "react-router-dom";
import "./Promo.css";
import promoImage from "../../images/promo-logo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__description">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <span className="promo__caption">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </span>
          <Link to="#" className="promo__link-button">
            Узнать больше
          </Link>
        </div>
        <img
          src={promoImage}
          className="promo__image"
          alt="Промо изображение"
        />
      </div>
    </section>
  );
}

import React from "react";
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
          <a href="#about-project" className="promo__link-button">
            Узнать больше
          </a>
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

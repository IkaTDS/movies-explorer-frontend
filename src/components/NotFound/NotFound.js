import React from "react";
import "./NotFound.css";

export default function NotFound() {
    return (
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <button className="not-found__button-back">Назад</button>
        </section>
    )
}
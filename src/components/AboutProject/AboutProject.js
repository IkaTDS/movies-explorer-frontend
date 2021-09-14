import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__description-item">
          <h3 className="about-project__description-item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-item-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-item">
          <h3 className="about-project__description-item-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-item-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__schedule">
        <span className="about-project__schedule-backend">1 неделя</span>
        <span className="about-project__schedule-frontend">4 недели</span>
      </div>
    </section>
  );
}
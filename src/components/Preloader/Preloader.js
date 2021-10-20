import React from "react";
import "./Preloader.css";

const Preloader = (props) => {
  const { isLoading, isFilmsNotFoundShown } = props;

  return (
    <>
      <div className={`preloader ${isLoading ? "preloader_hidden" : ""}`}>
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>

      <div className={`preloader__search-error ${isFilmsNotFoundShown ? '' : 'preloader__search-error_hidden'}`}>
        <h2 className="preloader__search-error-text">Ничего не найдено</h2>
      </div>
    </>
  );
};

export default Preloader;

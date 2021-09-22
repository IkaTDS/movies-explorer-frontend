import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies() {
    return (
        <div className="movies">
            <SearchForm />
            <Preloader />
            <MoviesCardList />
        </div>
    )
}
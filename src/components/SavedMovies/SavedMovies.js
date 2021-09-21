import React from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies() {
    return (
        <div>
            <SearchForm />
            <MoviesCardList />
        </div>
    )
}
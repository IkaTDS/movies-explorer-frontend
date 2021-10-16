import React from "react";
import "./Thumbler.css";

export default function Thumbler(props) {
  const { isShortMoviesFiltred } = props;

  function handleThumblerOnChange(e) {
    props.thumblerOn(e.target.checked);
  }

  return (
    <label className="switch">
      <input type="checkbox" id="short-movie" name="short-movie" onChange={handleThumblerOnChange} checked={isShortMoviesFiltred} ></input>
      <span className="slider round"></span>
    </label>
  );
}

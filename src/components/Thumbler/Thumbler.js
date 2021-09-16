import React from "react";
import "./Thumbler.css";

export default function Thumbler() {
  return (
    <label className="switch">
      <input type="checkbox" id="short-movie" name="short-movie"></input>
      <span className="slider round"></span>
    </label>
  );
}

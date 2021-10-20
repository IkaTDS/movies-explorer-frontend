import React from "react";
import "./Thumbler.css";

export default function Thumbler(props) {
  // const { isShortMoviesFiltred } = props;
  const [ isChecked, setIsChecked ] = React.useState(false);

  function handleThumblerOnChange(event) {
    props.thumblerOn(!isChecked);
    setIsChecked(event.target.checked)
  }

  return (
    <label className="switch">
      <input type="checkbox" id="short-movie" name="short-movie" onChange={handleThumblerOnChange} checked={isChecked} ></input>
      <span className="slider round"></span>
    </label>
  );
}

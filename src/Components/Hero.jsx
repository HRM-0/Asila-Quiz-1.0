import DisplayAnswer from "./DisplayAnswer";
import React from "react";
export default function Hero(props) {
  return (
    <div id="hero">
      <div id="headline">
        <h1>Asila's Quiz App</h1>
        <p>
          Guess the word to win this round
        </p>
      </div>
     <DisplayAnswer answer={props.answer} iswon={props.iswon}  />
    </div>
  );
}
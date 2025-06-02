import React from "react";
import "./index.css"
import AnswerSpace from "./Components/AnswerSpace";
import Hero from "./Components/Hero";
import Keypad from "./Components/Keypad";
import QueryBox from "./Components/QueryBox";
import data from "./trivia_questions.json";

function App() {
  const [successStatus, setSuccessStatus] = React.useState(null); //  Confirms if user wins or not
  let [userAnswer, setUserAnswer] = React.useState(""); // User's Guess 
  let generateNumber;
  let [generatedText, setGeneratedText] = React.useState({});

  function newGame() { // Creates a new game instance 
    generateNumber = Math.floor(Math.random() * data.length);
    setGeneratedText(data[generateNumber]);
    setUserAnswer("");
  }

  React.useEffect(() => { // Runs the newGame function on load
    newGame();
  }, []);

  function handleLetterKeys(letter) { // Handles any click of the keyboard
    setUserAnswer((answer) => (answer += letter));
  }
  function remove() { //Removes the last letter from the user's guess
    setUserAnswer((answer) => answer.slice(0, -1));
  }
  function clear() { //Clears the user's guess
    setUserAnswer(() => "");
  }
  React.useEffect(() => { //Query to check whether the user's answer was correct or not
    let genText = generatedText.name?.toLowerCase();

    if (userAnswer.length === genText?.length) {
      if (userAnswer.toLowerCase() === genText) {
        setSuccessStatus(true);
        setTimeout(() => {
          setSuccessStatus(null);
          newGame();
        }, 2000);
      } else {
        console.log(genText);
        setSuccessStatus(false);
        setTimeout(() => {
          setSuccessStatus(null);
          newGame();
        }, 2000);
      }
    } else {
    }
  }, [userAnswer]);
  return (
    <>
      <Hero answer={generatedText?.name} iswon={successStatus} />{" "}
      <QueryBox meaning={generatedText?.meaning} />{" "}
      <AnswerSpace
        newGame={() => newGame()}
        boxwidth={generatedText?.name?.length}
        remove={remove}
        clear={clear}
        answer={userAnswer}
      />{" "}
      <Keypad clickHandler={handleLetterKeys} />
    </>
  );
}

export default App;

import correct from "./correct.mp3";
import wrong from "./wrong.mp3";
export default function DisplayAnswer(props) {
  if (props.iswon) {
    return (
      <div id="display" className="won">
        <h2 id="resultStats">You win!</h2>
        <p id="resultText">Well done! 🎉</p>
        <audio play autoPlay src={correct} />
      </div>
    );
  } else if (props.iswon === false) {
    return (
      <div id="display" className="lost">
        <h2 id="resultStats">You lost!</h2>
        <p id="resultText">The correct answer is {props.answer}</p>
        <audio play autoPlay src={wrong} />
      </div>
    );
  } else {
    return (
      <>
        {" "}
        <div id="display" className="empty"></div>
      </>
    );
  }
}

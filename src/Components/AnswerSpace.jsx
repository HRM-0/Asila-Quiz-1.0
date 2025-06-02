export default function AnswerSpace(props) {
  const numRenders = props.boxwidth;
  return (
    <>
      <div id="answerSpace">
        <input
          type="text"
          disabled
          style={{
            width: `calc(40px * ${numRenders})`, maxWidth: "2000px",
            display: "flex",
            placeContent: "center",
            textAlign: "center",
            letterSpacing: "10px",
          }}
          className="characterSpace"
          value={props.answer}
        />

        <div className="removeBtns">
          <svg
          type="button"
            onClick={() => props.remove()}
            className={`remove ${!props.answer && "disabled"}`}
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            width="auto"
            viewBox="0 0 640 500"
          >
            <g fill="#F7F7F7">
              <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z"></path>
            </g>
          </svg>
          <svg
          type="button"
            onClick={() => props.clear()}
            className={`clear ${!props.answer && "disabled"}`}
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            width="auto"
            viewBox="0 0 48 48"
          >
            <title>e-remove</title>
            <g fill="#F7F7F7">
              <path
                d="M36.728,8.443l-12.728,12.729L11.272,8.443c-.391-.391-1.024-.391-1.414,0l-1.414,1.414c-.391,.391-.391,1.024,0,1.414l12.728,12.729-12.728,12.729c-.39,.391-.39,1.024,0,1.414l1.414,1.414c.391,.391,1.024,.391,1.414,0l12.728-12.729,12.728,12.729c.391,.391,1.024,.391,1.414,0l1.414-1.414c.391-.391,.391-1.024,0-1.414l-12.728-12.729,12.728-12.729c.39-.391,.39-1.024,0-1.414l-1.414-1.414c-.391-.391-1.024-.391-1.414,0Z"
                fill="#F7F7F7"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div id="answerSpace">
        <button onClick={() => props.newGame()} className="newGame">
          New Game
        </button>
      </div>
    </>
  );
}

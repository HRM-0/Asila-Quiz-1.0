export default function ButtonKey(props) {
    return (
      <button letter={props.letter} onClick={() => props.clickHandler(props.idd)} className="key">
        {props.letter}
      </button>
    );
  }
  
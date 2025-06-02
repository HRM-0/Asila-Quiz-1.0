import keyData from "./Keys.js";
import ButtonKey from "./Buttons.jsx";
export default function Keypad(prop) {
  const vkeysDisplay = keyData.map((x) => {
    return (
      <ButtonKey
        idd={x.letter}
        clickHandler={prop.clickHandler}
        key={x.key}
        letter={x.letter}
      />
    );
  });
  return <div id="keypad">{vkeysDisplay}</div>;
}

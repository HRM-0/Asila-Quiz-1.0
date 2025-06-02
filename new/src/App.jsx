import React from "react";
import padsData from "./Components/padsData";
import Pads from "./Components/Pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads(prev => prev.map((x) => x.id === id ? {...x, on: !x.on} : {...x} ));
    console.log(id);
  }

  const buttonElements = pads.map((pad) => (
    <Pads
      onClick={toggle}
      id={pad.id}
      on={pad.on}
      key={pad.id}
      color={pad.color}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

import React from "react";

export default function Pads(prop) {
//   const [isOn, setIsOn] = React.useState(prop.on);

//   function handleClick() {
//     setIsOn((prev) => !prev);
//   }

  return (
    <button
      onClick={() => prop.onClick(prop.id)}
      className={prop.on ? "on" : undefined}
      style={{ backgroundColor: prop.color }}
      key={prop.id}
    ></button>
  );
}

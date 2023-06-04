import React, { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("психопат");

  function handleClick() {
    setSherlock("высокоактивный социопат");
  }

  return (
    <div>
      <h2>Шерлок - {sherlock}</h2>
      <button onClick={handleClick}>Узнать правду</button>
    </div>
  );
}

export default Detective;
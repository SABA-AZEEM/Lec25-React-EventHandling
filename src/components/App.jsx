import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [backgroundColor, setBackgroundColor] = useState("white");

  function setHeading() {
    setHeadingText("Submitted");
  }
  function setMouseOver() {
    setBackgroundColor("black");
  }
  function setMouseOut() {
    setBackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor }}
        onClick={setHeading}
        onMouseOver={setMouseOver}
        onMouseOut={setMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

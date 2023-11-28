import React, { useState } from "react";
function HomePage(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <div className="App">
      <textarea
        cols={100}
        rows={8}
        style={{ marginTop: 10, padding: 5 }}
        value={text}
        onChange={(event) => {
          handleOnChange(event);
          console.log(event);
        }}
        placeholder="Start entering....."
      />
      <button>Click me </button>
      <h1> Preview</h1>
      <p>{text}</p>
    </div>
  );
}

export default HomePage;

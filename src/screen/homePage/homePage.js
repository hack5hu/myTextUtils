import React, { useState, useEffect } from "react";
function HomePage(props) {
  const [text, setText] = useState("");
  const [isCap, setIsCap] = useState(false);
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
      console.log(isCap);
      console.log(text);
  }, [text, isCap]);
  /**
   * this function is use for changing the value of isCap
   * @param bool is boolean
   * @param 
   */

 function truefalse() {
    // if (isCap == true) {
    //   setIsCap(false);
    //   console.log(isCap);
    // } else {
    //   setIsCap( true);
    //   console.log(isCap);
    // }
    // console.log("line 26",isCap)
    setIsCap(!isCap)
  }
  // console.log("line 31", isCap);
  return (
    <div className="App">
      <textarea
        cols={100}
        rows={8}
        style={{ marginTop: 10, padding: 5 }}
        value={text}
        onChange={(event) => {
          handleOnChange(event);
        }}
        placeholder="Start entering....."
        className=""
      />
      <button onClick={truefalse}>For Capital </button>
      <button> For Small</button>
      <h1> Preview</h1>

      <p>{text}</p>
      {/* <button onClick={()=>chng()}>Chnage the value I</button> */}
    </div>
  );
}

export default HomePage;

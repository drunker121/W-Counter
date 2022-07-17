import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was fired" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  //setText("New");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

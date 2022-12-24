import React from "react";
import { useState } from "react";

export default function TextForms(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to upperacse","success")
  };
  const handledownclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lowercase","success")
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("enter text here");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#311d45'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode==='dark'?'#193853':'white', color:props.mode==='dark'?'white':'#311d45'}}
            value={text}
            onChange={handleonchange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleupclick}>
          upper case
        </button>
        <button className="btn btn-primary " onClick={handledownclick}>
          lower case
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#311d45'}}>
        <h1>your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter something to preview here"}</p>
      </div>
    </>
  );
}

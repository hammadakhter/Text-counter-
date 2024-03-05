import React, { useState } from "react";

const Text = (props) => {
  const handleUpperCaseText = ()=>{
    let upperCaseText = withoutuptext.toUpperCase();
    withuptext(upperCaseText);
  }

  const handleLowerCaseText = ()=>{
    let lowerCaseText = withoutuptext.toLowerCase();
    withuptext(lowerCaseText);
  }

  const handleClearText = ()=>{
    let text = "" ;
    withuptext(text)
  }

  const handleCopyText = ()=>{
    let text = document.getElementById("myTextBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = ()=>{
    let newtext = withoutuptext.split(/[ ]+/);
    withuptext(newtext.join(" "));
  } 

  const handleOnChange = (e)=>{
    withuptext(e.target.value)
  }

  const [withoutuptext, withuptext] = useState("");
  return (
    <>
    <div className="container" style={{color : props.darkMode==='dark'?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"id="myTextBox" style={{backgroundColor : props.darkMode==='dark'?"#171716":"#f5f5eb" , color :  props.darkMode==='dark'?"white":"black"}} onChange={handleOnChange} value={withoutuptext} rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.darkMode==='dark'?"success":"primary"} `}  onClick={handleUpperCaseText}>Convert To Uppercase</button>
      <button className={`btn btn-${props.darkMode==='dark'?"success":"primary"} mx-2 `} onClick={handleLowerCaseText}>Convert To Lowercase</button>
      <button className={`btn btn-${props.darkMode==='dark'?"success":"primary"} `} onClick={handleClearText}>Clear Text</button>
      <button className={`btn btn-${props.darkMode==='dark'?"success":"primary"} mx-2`} onClick={handleCopyText}>Copy Text</button>
      <button className={`btn btn-${props.darkMode==='dark'?"success":"primary"} `} onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.darkMode==='dark'?"white":"black"}}>
      <h1>Your Text Summary</h1>
        <p>{withoutuptext.split(" ").length - 1} Words and {withoutuptext.length} Characters</p>
        <p>{0.008 * withoutuptext.split(" ").length} mintues to read</p>
        <h2>perview</h2>
        <p>{withoutuptext}</p>
    </div>
    </>
  );
};

export default Text;

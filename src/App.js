import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormInput from "./components/FormInput.js";
import Dashboard from "./Dashboard.js";

function App(props) {
  const [inputValue, setInputValue] = useState('')
  function handleChange(event) {
    setInputValue(event)
    console.log(event)
  }

  return (
    <div className="App" style={{margin:30, padding:30}}>
      <form>
        <FormInput type={"text"} onChange={handleChange} />
        <FormInput type={"email"} onChange={handleChange} />
        <button onClick={()=>{ console.log(inputValue)}}>Press</button>
      </form>
      <Dashboard/>
    </div>
  );
}

export default App;

import React, {useState} from "react";

function FormInput(props) {

  function handleChange(event){
    if(props.onChange) props.onChange(event.target.value)
  }

  return (
    <div style={{padding:10,}}>
      <input type={props.type} name="input-form" onChange={handleChange} />
    </div>
  );
}
export default FormInput;
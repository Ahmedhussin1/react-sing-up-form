import React, { useState } from 'react'
import './FormInput.css'
function FormInput(props) {
    const { label, errorMassage, onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false)
    const handelFocused = (e) =>{
        setFocused(true)
    }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handelFocused} focused={focused.toString()} />
      <span>{errorMassage}</span>
    </div>
  );
}

export default FormInput
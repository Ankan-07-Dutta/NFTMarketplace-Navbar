import React from 'react'

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({btnName, handleClick}) => {
  return (
    <div className={Style.button_box}>
      <button className={Style.button} onClick={()=> handleClick()}>
        {btnName}
      </button>
    </div>
  )
}

export default Button

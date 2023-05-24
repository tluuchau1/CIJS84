import React, { useState } from "react";
import useHook from "./useHook.jsx";



const CountNumber = ({defaultValue}) => {

   


  const {truxuong1, tangLen1, number} = useHook()
  
  return (
    <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
      <label className="label">{number}</label>
      <div style={{display: "inline-block"}}>
        <button 
        onClick={truxuong1}
        className="btn"
        >-
        </button>
        <button 
          onClick={tangLen1}
        className="btn">+
        </button>
      </div>
    </div>
  );
};
export default CountNumber;

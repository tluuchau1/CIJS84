import React, { useState } from "react";
import useHook from "./useHook.jsx";



const CountNumber = () => {

  const {actAdd, actRemove, number} = useHook()
  
  return (
    <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
      <label className="label">{number}</label>
      <div style={{display: "inline-block"}}>
        <button 
        onClick={actRemove}
        className="btn"
        >-
        </button>

        <button 
          onClick={actAdd}
        className="btn">+
        </button>
      </div>

    </div>
  );
};
export default CountNumber;

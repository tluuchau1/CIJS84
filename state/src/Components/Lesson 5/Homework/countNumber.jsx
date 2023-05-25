import React from "react";
import { useState } from "react";
import Button from "./Button.js";

const Lesson5 = () => {
  const [number, setNumber] = useState(0);

  const actAdd = () => {
    setNumber((plus) => plus + 1);
  };

  const actRemove = (e) => {
    if (number <= 0) {
      e.preventDefault();
      alert('Đến 0 rồi dừng nhé');
    } else {
    setNumber((prev) => prev - 1);
    }
  };

  const [number1, setNumber1] = useState(1);

  const light = () => {
    setNumber1((plus) => plus + 1);
    if (number1 === 3) {
      setNumber1(1);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label>{number}</label>
        <div>
          <Button nameBtn={"+"} onClick={actAdd} type={"button"} />
          <Button nameBtn={"-"} onClick={actRemove} type={"button"} />
        </div>
      </div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column-reverse  ",
          
        }}>
        <Button nameBtn="Next" onClick={light} />
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
          
        }}>
          <span
            style={{
              width: "100px",
              height:"100px",
              borderRadius: "50%",
              display: "block",
              backgroundColor: number1 === 1 ? "red" : "gray",
            }}
          ></span>
           <span
            style={{
              width: "100px",
              height:"100px",
              borderRadius: "50%",
              display: "block",
              backgroundColor: number1 === 2 ? "yellow" : "gray",
            }}
          ></span>
           <span
            style={{
              width: "100px",
              height:"100px",
              borderRadius: "50%",
              display: "block",
              backgroundColor: number1 === 3 ? "green" : "gray",
            }}
          ></span>
        </div>
      </div>
    </>
  );
};
export default Lesson5;

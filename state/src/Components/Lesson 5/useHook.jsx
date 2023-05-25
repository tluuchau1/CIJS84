import { useState } from "react";
const useHookIndex = () => {
  const [number, setNumber] = useState(0);
  

  const actAdd = () => {
    setNumber(number + 1); // cách 1 
  };

  const actRemove = () => {
    setNumber((back) => back - 1); // cách 2
  };

  return { number, actAdd, actRemove };
};
export default useHookIndex;

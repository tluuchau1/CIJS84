import { useState } from "react";
const useHookIndex = () => {
  const [number, setNumber] = useState(0);

  const tangLen1 = () => {
    setNumber(number + 1);
  };

  const truxuong1 = () => {
    setNumber((back) => back - 1);
  };

  return { number, tangLen1, truxuong1 };
};
export default useHookIndex;

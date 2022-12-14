import react, { useState } from "react";

const Counter = () => {
  let first = 0;
  const [num, setNumber] = useState(first);

  const increase = () => {
    setNumber(num + 1);
  };

  const decrease = () => {
    setNumber(num - 1);
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;

import { useEffect, useState } from "react";

import PrimaryButton from "./common/PrimaryButton";

const Counter = () => {
  const [counterState, setCounterState] = useState(10);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (counterState === 15) {
      setMessage("hurraaa!!!!");
    }
    if (counterState === 20) {
      setMessage("YESS");
    }
  }, [counterState]);

  useEffect(() => {
    setCounterState(10);
  }, [message]);

  const handleIncrement = () => {
    setCounterState(counterState + 1);
  };

  return (
    <div>
      <h1>Counter: {counterState}</h1>
      <h1>{message}</h1>
      <PrimaryButton
        disableBtn={false}
        text={"Increment"}
        onClick={handleIncrement}
        // onClick={() => setCounterState(counterState + 1)}
      />
    </div>
  );
};

export default Counter;

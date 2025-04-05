import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyAmount,
} from "./redux/features/counter/counterSlice";

function App() {
  const actualamount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <>
      <p>Amount:{actualamount}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="text"
        placeholder="Enter a value"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementbyAmount(amount))}>
        Incrementbyvalue
      </button>
    </>
  );
}

export default App;

import { useState } from "react";
import Header from "./component/Header.jsx";
import TextDisplay from "./component/TextDisplay.jsx";
import CounterButtons from "./component/CounterButton.jsx";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <Header />
      <CounterButtons
        value={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;

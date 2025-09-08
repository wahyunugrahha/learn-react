import TextDisplay from "./TextDisplay.jsx";

function CounterButtons({ value, onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <TextDisplay value={value} />
        <button onClick={onIncrement}>+</button>
      </div>
      <div>
        <button onClick={onReset} disabled={value === 0}>
          Reset!
        </button>
      </div>
    </div>
  );
}

export default CounterButtons;

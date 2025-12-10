import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };
  const clear = () => setInput("");
  const del = () => setInput(input.slice(0, -1));

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {/* Top row: only brackets, DEL, C */}
        <button className="operator" onClick={() => handleClick("(")}>(</button>
        <button className="operator" onClick={() => handleClick(")")}>)</button>
        <button className="operator" onClick={del}>DEL</button>
        <button className="operator" onClick={clear}>C</button>

        {/* Numbers ascending, operators on far right */}
        <button className="number" onClick={() => handleClick("0")}>0</button>
        <button className="number" onClick={() => handleClick("1")}>1</button>
        <button className="number" onClick={() => handleClick("2")}>2</button>
        <button className="operator" onClick={() => handleClick("+")}>+</button>

        <button className="number" onClick={() => handleClick("3")}>3</button>
        <button className="number" onClick={() => handleClick("4")}>4</button>
        <button className="number" onClick={() => handleClick("5")}>5</button>
        <button className="operator" onClick={() => handleClick("-")}>−</button>

        <button className="number" onClick={() => handleClick("6")}>6</button>
        <button className="number" onClick={() => handleClick("7")}>7</button>
        <button className="number" onClick={() => handleClick("8")}>8</button>
        <button className="operator" onClick={() => handleClick("*")}>×</button>

        <button className="number" onClick={() => handleClick("9")}>9</button>
        <button className="number" onClick={() => handleClick(".")}>.</button>
        <button className="number" onClick={() => handleClick(",")}>,</button>
        <button className="operator" onClick={() => handleClick("/")}>÷</button>

        {/* Equal at bottom-right */}
        <button className="operator equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

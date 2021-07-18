import React, { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const [result, setResult] = useState("");

  const handleNum = (e) => {
    let numbers = [];
    let val = e.target.value;
    // while (val != "=") {
    if (val !== "=") {
      numbers.push(val);
      console.log("Numbers : ", numbers);
    }
    console.log("You click  ::", numbers);
  };

  const handleChange = () => {
    return alert("Click");
  };
  const handleClear = () => {
    console.log("clear");
  };
  return (
    <div className="container">
      <div className="main">
        <input
          className="result"
          value={result}
          onChange={handleChange}
        ></input>
        <div className="main-flex flexColor">
          <button onClick={handleClear} className="flex0" value="AC">
            AC
          </button>
          <button onClick={handleNum} value="%">
            %
          </button>
          <button onClick={handleNum} value="/" className="last-child">
            /
          </button>
        </div>
        <div className="main-flex">
          <button onClick={handleNum} value="9">
            9
          </button>
          <button onClick={handleNum} value="8">
            8
          </button>
          <button onClick={handleNum} value="7">
            7
          </button>
          <button onClick={handleNum} value="*" className="last-child">
            x
          </button>
        </div>
        <div className="main-flex">
          <button onClick={handleNum} value="6">
            6
          </button>
          <button onClick={handleNum} value="5">
            5
          </button>
          <button onClick={handleNum} value="4">
            4
          </button>
          <button onClick={handleNum} value="-" className="last-child">
            --
          </button>
        </div>
        <div className="main-flex">
          <button onClick={handleNum} value="3">
            3
          </button>
          <button onClick={handleNum} value="2">
            2
          </button>
          <button onClick={handleNum} value="1">
            1
          </button>
          <button onClick={handleNum} value="+" className="last-child">
            +
          </button>
        </div>
        <div className="main-flex ">
          <button onClick={handleNum} className="flex4" value="0">
            0
          </button>
          <button onClick={handleNum} value=".">
            .
          </button>
          <button onClick={handleNum} value="=" className="last-child">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

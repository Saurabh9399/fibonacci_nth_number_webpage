import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState();

  const fib = (event) => {
    let n = event.target.value;
    let arr = [0, 1];

    if (n <= 2) return 1;

    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
      // arr.push(arr[i-1] + arr[i-2])
    }

    let ans = arr[n];
    setNumber(ans);

    // return arr...for list of all values!!!
  };

  return (
    <div className="card">
      <div className="series">
        <h1 style={{ color:"maroon" }}>Enter a number :-</h1>
        <input type="number" className="input" onChange={fib} />
      </div>

      <div className="answer">
        <h2>Nth Fibonacci no. is :- </h2>
        <h2 className='ans_num'>{number}</h2>
      </div>
    </div>
  );
}

export default App;

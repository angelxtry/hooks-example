import React, { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n < 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const Memo = () => {
  const [num, setNum] = useState(1);
  const fib = useMemo(() => fibonacci(num), [num]);
  return (
    <div>
      <h1>useMemo Example</h1>
      <h2>
        fibonacci of {num} is {fib}
      </h2>
      <button type="button" onClick={() => setNum(num + 1)}>
        +
      </button>
    </div>
  );
};

export default Memo;

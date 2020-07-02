import React, { useState } from "react";

const State = () => {
  const [isGreen, setIsGreen] = useState(true);
  return (
    // eslint-disable-next-line
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "green" : "crimson" }}
    >
      useState Example
    </h1>
  );
};

export default State;

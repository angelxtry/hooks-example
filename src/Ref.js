import React, { useRef, useState } from "react";

const Ref = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current += 1;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }
  return (
    <>
      <h1>useRef Example</h1>
      <button type="button" onClick={() => incrementAndDelayLogging()}>
        delay logging
      </button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </>
  );
};

export default Ref;

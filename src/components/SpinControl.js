import React, { useState } from "react";

function SpinControl() {
  const [spinner, setSpinner] = useState(0);
  const [press, setPress] = useState(0);

  const handleDownStart = (e, param) => {
    setPress(
      setTimeout(() => {
        pressing(e, param);
        handleDownStart(e, param);
      }, 50)
    );
  };

  const pressing = (e, param) => {
    if (param == "-") {
      setSpinner((prev) => prev - 1);
      console.log("pressing -", spinner);
    } else if (param == "+") {
      setSpinner((prev) => prev + 1);
      console.log("pressing +", spinner);
    }
  };

  const handleDownEnd = (e) => {
    clearTimeout(press);
    console.log("End", e);
  };

  return (
    <div className="SpinControl">
      <h2>Spinner</h2>
      <div className="spin" style={{ transform: "rotate(" + spinner*(-1) + "deg)" }}>
        &rarr;
      </div>
      <p>{spinner}</p>
      <div>
        <button
          onMouseDown={(e) => {
            handleDownStart(e, "-");
          }}
          onMouseUp={(e) => {
            handleDownEnd(e);
          }}
        >
          -1
        </button>
        <button
          onMouseDown={(e) => {
            handleDownStart(e, "+");
          }}
          onMouseUp={(e) => {
            handleDownEnd(e);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default SpinControl;

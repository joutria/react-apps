import React, { useState } from "react";

function SpinControl() {
  const [spinner, setSpinner] = useState(0);
  const [press, setPress] = useState(0);

  const handleDownStart = ( param) => {
    setPress(
      setTimeout(() => {
        pressing( param);
        handleDownStart( param);
      }, 50)
    );
  };

  const pressing = ( param) => {
    if (param === "-") {
      setSpinner((prev) => prev - 1);
      console.log("pressing -", spinner);
    } else if (param === "+") {
      setSpinner((prev) => prev + 1);
      console.log("pressing +", spinner);
    }
  };

  const handleDownEnd = () => {
    clearTimeout(press);
    console.log("End");
  };

  return (
    <div className="SpinControl">
      <h2>Spinner</h2>
      <div
        className="spin"
        style={{ transform: "rotate(" + spinner * -1 + "deg)" }}
      >
        &rarr;
      </div>
      <p>{spinner}</p>
      <div>
        <button
          onMouseDown={() => {
            handleDownStart( "-");
          }}
          onMouseUp={() => {
            handleDownEnd();
          }}
        >
          -1
        </button>
        <button
          onMouseDown={() => {
            handleDownStart( "+");
          }}
          onMouseUp={() => {
            handleDownEnd();
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default SpinControl;

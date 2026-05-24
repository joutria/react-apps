import React, { useState, useRef, useEffect, useCallback } from "react";

function SpinControl() {
  const [spinner, setSpinner] = useState(0);
  const timerRef = useRef(null);

  const pressing = useCallback((param) => {
    setSpinner((prev) => {
      if (param === "-") return prev - 1;
      if (param === "+") return prev + 1;
      return prev;
    });
  }, []);

  const handleDownStart = useCallback((param) => {
    pressing(param);
    timerRef.current = setTimeout(() => {
      handleDownStart(param);
    }, 50);
  }, [pressing]);

  const handleDownEnd = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

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
          onMouseDown={() => handleDownStart("-")}
          onMouseUp={handleDownEnd}
          onMouseLeave={handleDownEnd}
        >
          -1
        </button>
        <button
          onMouseDown={() => handleDownStart("+")}
          onMouseUp={handleDownEnd}
          onMouseLeave={handleDownEnd}
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default SpinControl;

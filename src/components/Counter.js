import { useState } from "react";
import Popup from "./Popup";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Counter">
      <button onClick={togglePopup}>Counter</button>
      {isOpen && (
        <Popup
          content={
            <>
              <h2>Counter</h2>
              <p>{counter}</p>
              <div>
                <button onClick={() => setCounter(counter - 1)}>-1</button>
                <button onClick={() => setCounter(counter + 1)}>+1</button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Counter;

import React, { useState } from "react";
import Popup from "./Popup";
import SpinControl from "./SpinControl";

function Spinner() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Spinner">
      <button onClick={togglePopup}>Spinner</button>
      {isOpen && (
        <Popup
          content={
            <>
              <SpinControl />
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Spinner;

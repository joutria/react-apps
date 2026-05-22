import { useState } from "react";
import Popup from "./Popup";

function Angles() {
  const [isOpen, setIsOpen] = useState(false);
  const [degrees, setDegrees] = useState("0");
  const [rads, setRads] = useState("0");
  const [convert, setConvert] = useState("...");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const safeParseFloat = (val) => {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num;
  };

  return (
    <div className="Angles">
      <button onClick={togglePopup}>Angles</button>
      {isOpen && (
        <Popup
          content={
            <>
              <h2>Angles</h2>
              <p>Converting {convert}</p>
              <div className="spacing">
                <label>Degrees: </label>
                <input
                  type="number"
                  value={degrees}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDegrees(val);
                    const deg = safeParseFloat(val);
                    setRads((deg * Math.PI) / 180);
                    setConvert("to Radians...");
                  }}
                />
              </div>
              <div className="spacing">
                <label>Radians: </label>
                <input
                  type="number"
                  value={rads}
                  onChange={(e) => {
                    const val = e.target.value;
                    setRads(val);
                    const rad = safeParseFloat(val);
                    setDegrees((rad * 180) / Math.PI);
                    setConvert("to Degrees...");
                  }}
                />
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Angles;

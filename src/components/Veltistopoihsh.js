import React from "react";
import "./Veltistopoihsh.css";
import { useHistory } from "react-router-dom";

function Veltistopoihsh() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div>
      <div className='devOnClick'>
        <h1>Βελτιστοποίηση Page Display</h1>
      </div>
      <div>
        <button onClick={goToPreviousPath}>Back</button>
      </div>
    </div>
  );
}

export default Veltistopoihsh;

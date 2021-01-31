import React from "react";
import "./Ekpaidevsh.css";
import { useHistory } from "react-router-dom";

function Ekpaidevsh() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div>
      <div className='devOnClick'>
        <h1>Εκπαιδευση Page Display</h1>
      </div>

      <div>
        <button onClick={goToPreviousPath}>Back</button>
      </div>
    </div>
  );
}

export default Ekpaidevsh;

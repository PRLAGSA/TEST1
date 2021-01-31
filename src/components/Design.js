import React from "react";
import "./Design.css";
import { useHistory } from "react-router-dom";

function Design() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div>
      <div className='devOnClick'>
        <h1>Design Page Display</h1>
      </div>

      <div>
        <button onClick={goToPreviousPath}>Back</button>
      </div>
    </div>
  );
}

export default Design;

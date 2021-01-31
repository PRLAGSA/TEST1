import React from "react";
import { useHistory } from "react-router-dom";

function Hosting() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div>
      <div className='devOnClick'>
        <h1>Hosting Page Display</h1>
      </div>

      <div>
        <button onClick={goToPreviousPath}>Back</button>
      </div>
    </div>
  );
}

export default Hosting;

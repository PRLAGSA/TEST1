import React from "react";
import { useHistory } from "react-router-dom";

function Proothisi() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div>
      <div className='devOnClick_proothisi'>
        <h1>Προωθηση Page Display</h1>
      </div>
      <div>
        <button onClick={goToPreviousPath}>Back</button>
      </div>
    </div>
  );
}

export default Proothisi;

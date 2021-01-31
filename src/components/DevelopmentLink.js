import React from "react";

import "./DevelopmentLink.css";

// import { useHistory } from "react-router-dom";

function DevelopmentLink() {
  // let history = useHistory();
  // const goToPreviousPath = () => {
  //   history.goBack();
  // };
  return (
    <div className='text_wrapper'>
      <h1 className='text'>
        <div className='imageMac'></div>
        <div className='textmain1'>
          16 χρόνια κατασκευάζουμε <br></br>και υποστηρίζουμε εκατοντάδες
          e-shop,
          <br></br> με πολλά από αυτά με πάνω από 1.000 <br></br>
          παραγγελίες την ημέρα.
        </div>

        <div className='text2'>E-SHOPS</div>
      </h1>

      {/* 
      <button onClick={goToPreviousPath}>Back</button> */}
    </div>
  );
}

export default DevelopmentLink;

import React from "react";
import "../components/Category_Mobile.css";

function Category_Mobile() {
  return (
    <div className='Cat_mobile_wrap'>
      <div className='mobileCategory'>
        <h3>Development</h3>
        <h3>Design</h3>
        <h3>Βελτιστοπίηση</h3>
      </div>
      <div className='mobileCategory'>
        <h3>Προώθηση</h3>
        <h3>Hosting</h3>
        <h3>Εκπαίδευση</h3>
      </div>
    </div>
  );
}

export default Category_Mobile;

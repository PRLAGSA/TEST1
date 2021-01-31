import React from "react";
import { Link } from "react-router-dom";
import "./MAINPAGE.css";

function MAINPAGE() {
  return (
    <div>
      <Link to='/κατασκευη Ιστοσελιδων'>
        <div className='Banner_Container'>
          <div className='Banner_Title'>
            {/* <img src={Banner} alt='banner' className='Banner' /> */}
            <div className='zIndexContainer'>
              <div className='threeItems'>
                <div className='phone'>yyy</div>
                <div className='tablet'>yyy</div>
                <div className='iMac'>yyy</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MAINPAGE;

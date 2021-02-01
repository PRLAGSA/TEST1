import React from "react";
import Dark__Logo from "../video/LOGO-DARK-01.png";

import "./MAINPAGE.css";

function MAINPAGE() {
  return (
    <div>
      {/* <Link to='/κατασκευη Ιστοσελιδων'> */}
      <div className='Banner_Container'>
        <div className='Banner_Title'>
          {/* <img src={Banner} alt='banner' className='Banner' /> */}
          <div className='zIndexContainer'>
            <h1 className='h1GNORISTE'>
              Γνωριστε την{" "}
              <div className='DarkLogo_Container'>
                <img src={Dark__Logo} alt='darklogo' className='DarkLogo' />
              </div>{" "}
            </h1>
            {/* <h4 className='h4GNORISTE'></h4> */}
            <div className='threeItems'>
              <div className='phone'></div>
              <div className='tablet'></div>
              <div className='iMac'></div>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default MAINPAGE;

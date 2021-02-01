import React from "react";

import "./MAINPAGE.css";

function MAINPAGE() {
  return (
    <div>
      {/* <Link to='/κατασκευη Ιστοσελιδων'> */}
      <div className='Banner_Container'>
        <div className='Banner_Title'>
          {/* <img src={Banner} alt='banner' className='Banner' /> */}
          <div className='zIndexContainer'>
            <h1 className='h1GNORISTE'>Γνωριστε την Netstudio</h1>
            {/* <h4 className='h4GNORISTE'>
              Γνωριστε την <bold>NETSTUDIO</bold>
            </h4> */}
            <div className='threeItems'>
              <div className='phone'></div>
              <div className='tablet'></div>
              <div className='iMac'></div>
            </div>
          </div>
        </div>
        <h4>4985840584059840589489</h4>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default MAINPAGE;

import React from "react";
import "../components/MainTitles.css";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import StorageIcon from "@material-ui/icons/Storage";
import StyleIcon from "@material-ui/icons/Style";
import CompareIcon from "@material-ui/icons/Compare";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

function MainTitles() {
  return (
    <div className='clip'>
      <div className='topOfClip'>
        <div className='alignItems'>
          <AccountTreeIcon style={{ marginRight: "6px" }} />
          Development
        </div>
      </div>
      <div className='topOfClip'>
        <div className='alignItems'>
          <InsertChartIcon style={{ marginRight: "6px" }} />
          Προωθηση
        </div>
      </div>
      <div className='topOfClip'>
        <div className='alignItems'>
          <StorageIcon style={{ marginRight: "6px" }} />
          Hosting
        </div>
      </div>

      <div className='topOfClip'>
        <div className='alignItems'>
          <StyleIcon style={{ marginRight: "6px" }} />
          Design
        </div>
      </div>
      <div className='topOfClip'>
        <div className='alignItems'>
          <CompareIcon style={{ marginRight: "6px" }} />
          Βελτιστοποίηση
        </div>
      </div>
      <div className='topOfClip'>
        <div className='alignItems'>
          <LocalLibraryIcon style={{ marginRight: "6px" }} />
          Εκπαιδευση
        </div>
      </div>
    </div>
  );
}

export default MainTitles;

import React from "react";
import "../components/Category_Mobile.css";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import PaletteIcon from "@material-ui/icons/Palette";
import StorageIcon from "@material-ui/icons/Storage";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

function Category_Mobile() {
  return (
    <div className='Cat_mobile_wrap'>
      <div className='mobileCategory'>
        <h3 className='itemandicon'>
          <AccountTreeIcon />
          Development
        </h3>
        <h3 className='itemandicon'>
          <PaletteIcon />
          Design
        </h3>
        <h3 className='itemandicon'>
          <VerifiedUserIcon />
          Βελτιστοπίηση
        </h3>
      </div>
      <div className='mobileCategory'>
        <h3 className='itemandicon'>
          <InsertChartIcon />
          Προώθηση
        </h3>
        <h3 className='itemandicon'>
          <StorageIcon />
          Hosting
        </h3>
        <h3 className='itemandicon'>
          <LocalLibraryIcon />
          Εκπαίδευση
        </h3>
      </div>
    </div>
  );
}

export default Category_Mobile;

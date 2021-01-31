import React from "react";
import "../components/Category_Mobile.css";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import PaletteIcon from "@material-ui/icons/Palette";
import StorageIcon from "@material-ui/icons/Storage";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { BrowserRouter as Route } from "react-router-dom";
import { Link } from "react-router-dom";
import devlink from "../components/DevelopmentLink";

function Category_Mobile() {
  return (
    <div className='Cat_mobile_wrap'>
      <div className='mobileCategory'>
        <Link to='/DevPage' style={{ textDecoration: "none" }}>
          <h3 className='itemandicon'>
            <AccountTreeIcon
              style={{
                marginRight: "6px",
                color: "white",
              }}
            />
            Development
          </h3>
        </Link>

        <h3 className='itemandicon'>
          <PaletteIcon style={{ marginRight: "6px" }} />
          Design
        </h3>
        <h3 className='itemandicon'>
          <VerifiedUserIcon style={{ marginRight: "6px" }} />
          Βελτιστοπίηση
        </h3>
      </div>
      <div className='mobileCategory'>
        <h3 className='itemandicon'>
          <InsertChartIcon style={{ marginRight: "6px" }} />
          Προώθηση
        </h3>
        <h3 className='itemandicon'>
          <StorageIcon style={{ marginRight: "6px" }} />
          Hosting
        </h3>
        <h3 className='itemandicon'>
          <LocalLibraryIcon style={{ marginRight: "6px" }} />
          Εκπαίδευση
        </h3>
      </div>
      <devlink />
    </div>
  );
}

export default Category_Mobile;

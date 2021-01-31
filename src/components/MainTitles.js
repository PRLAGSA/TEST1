import React from "react";
import "../components/MainTitles.css";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import StorageIcon from "@material-ui/icons/Storage";
import StyleIcon from "@material-ui/icons/Style";
import CompareIcon from "@material-ui/icons/Compare";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function MainTitles() {
  return (
    <div className='clip'>
      <div className='topOfClip'>
        <NavLink
          to='/DevPage'
          activeStyle={{
            border: "1px solid white",
            borderRadius: "3px",
            backgroundColor: "#122335",
            color: "white",
          }}
          style={{
            textDecoration: "none",
            color: "white",
            border: "1px solid transparent",
          }}
        >
          <div className='alignItems'>
            <AccountTreeIcon style={{ marginRight: "6px" }} />
            Development
          </div>
        </NavLink>
      </div>
      <div className='topOfClip'>
        <Link
          to='/Προωθηση'
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className='alignItems'>
            <InsertChartIcon style={{ marginRight: "6px" }} />
            Προωθηση
          </div>
        </Link>
      </div>
      <div className='topOfClip'>
        <Link
          to='/Hosting'
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className='alignItems'>
            <StorageIcon style={{ marginRight: "6px" }} />
            Hosting
          </div>
        </Link>
      </div>

      <div className='topOfClip'>
        <Link
          to='/Design'
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className='alignItems'>
            <StyleIcon style={{ marginRight: "6px" }} />
            Design
          </div>
        </Link>
      </div>
      <div className='topOfClip'>
        <Link
          to='/Βελτιστοποιηση'
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className='alignItems'>
            <CompareIcon style={{ marginRight: "6px" }} />
            Βελτιστοποίηση
          </div>
        </Link>
      </div>
      <div className='topOfClip'>
        <Link
          to='/Εκπαιδευση'
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className='alignItems'>
            <LocalLibraryIcon style={{ marginRight: "6px" }} />
            Εκπαιδευση
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainTitles;

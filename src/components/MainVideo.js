import React from "react";
import "../components/mainVideo.css";

import Video from "../video/header-video.mp4";
import Logo from "../video/logowhite.svg";

import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

// import Button from "@material-ui/core/Button";
import BBButton from "../components/BBButton";
// import DevelopmentLink from "../components/DevelopmentLink";

// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

function MainVideo() {
  return (
    <>
      <div className='mainWrapper'>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "300px",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={Video} type='video/mp4' />
        </video>

        <div className='navbar'>
          <img src={Logo} alt='companyLogo' className='logo_image' />
          <p>υπ'όψιν του κ.Γιάννη</p>
        </div>

        <div className='menu_ItemsWrap'>
          <ul className='menu'>
            <NavLink
              exact
              to='/'
              style={{
                textDecoration: "none",
              }}
              className='menuItems'
              activeClassName='menuItems--active'
            >
              <li className='menuItems'>
                <h5>Αρχική</h5>
              </li>
            </NavLink>

            <NavLink
              exact
              to='/Υπηρεσίες'
              style={{ textDecoration: "none" }}
              className='menuItems'
              activeClassName='menuItems--active'
            >
              <li className='menuItems'>
                <h5>Υπηρεσίες</h5>
              </li>
            </NavLink>
            <li className='menuItems'>
              <h5>Έργα</h5>
            </li>
            <li className='menuItems'>
              <h5>Blog</h5>
            </li>

            <PublicOutlinedIcon
              style={{
                fontSize: "26px",
                border: "none",
                color: "white",
                paddingLeft: "17px",
                cursor: "pointer",
              }}
            />

            <ContactPhoneIcon
              style={{
                fontSize: "30px",
                border: "none",
                color: "white",
                marginLeft: "33px",
                cursor: "pointer",
              }}
            />
          </ul>
        </div>
        <div className='humberger'>
          <BBButton />
        </div>
      </div>

      <div className='banner_Title'>
        <p className='banner_title'>SOFTWARE DEVELOPMENT AGENCY</p>
        <p className='sub_title'>ιστοσελίδες και e-shop υψηλών απαιτήσεων</p>
        <div className='menuButtons'>
          {/* <Button
            variant='contained'
            style={{
              marginRight: "0px",
              marginTop: "-7px",
              backgroundColor: "white",
              zIndex: "999",
              marginBottom: "20px",
            }}
          >
            Δειγμα /
          </Button> */}
        </div>
        {/* <DevelopmentLink /> */}
      </div>
    </>
  );
}

export default MainVideo;

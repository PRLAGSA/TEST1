import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import ViewListIcon from "@material-ui/icons/ViewList";
import { Link } from "react-router-dom";
import "../components/BBButton.css";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls='fade-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <ViewListIcon
          style={{
            fontSize: "30px",
            border: "none",
            color: "white",
            marginLeft: "33px",
            cursor: "pointer",
          }}
        />
      </Button>
      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link
          to='/'
          MenuItem
          onClick={handleClose}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "left",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
            margin: "8px",
            padding: "3px 9px",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
        >
          Αρχικη
        </Link>

        <Link
          to='/Υπηρεσίες'
          MenuItem
          onClick={handleClose}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "left",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
            margin: "7px",
            padding: "3px 9px",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
        >
          Υπηρεσιες
        </Link>
        <Link
          to='/Εργα'
          MenuItem
          onClick={handleClose}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "left",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
            margin: "7px",
            padding: "3px 9px",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
        >
          Εργα
        </Link>

        <Link
          το='/Blog'
          MenuItem
          onClick={handleClose}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "left",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
            margin: "7px",
            padding: "3px 9px",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
        >
          Blog
        </Link>

        <MenuItem
          onClick={handleClose}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "left",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
            margin: "7px",
            padding: "3px 9px",
            borderRadius: "4px",
            backgroundColor: "rgba(201, 201, 201, 0.226)",
            marginBottom: "10px",
          }}
        >
          <div className='sideMenuItem'>κατασκευη e-shop</div>
        </MenuItem>
      </Menu>
    </div>
  );
}

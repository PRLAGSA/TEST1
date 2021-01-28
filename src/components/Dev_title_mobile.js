import React from "react";
import PaletteIcon from "@material-ui/icons/Palette";
import "../components/dev_title_mobile.css";

function Dev_title_mobile() {
  return (
    <div className='dev_title'>
      <PaletteIcon
        style={{
          color: "white",
          marginRight: "30px",
          backgroundColor: "none",
          paddingLeft: "10px",
          borderRadius: "50%",
          alignItems: "center",
          textSizeAdjust: "20px",
          fontSize: "20px",
        }}
      />
      Design
    </div>
  );
}

export default Dev_title_mobile;

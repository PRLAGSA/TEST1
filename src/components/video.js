import React from "react";
import bottomVIDEO from "../video/movement.mp4";

function video() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "300px",
          objectFit: "cover",
          zIndex: "100",
        }}
      >
        <source src={bottomVIDEO} type='video/mp4' />
      </video>
    </div>
  );
}

export default video;

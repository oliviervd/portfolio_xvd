import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";

const Theater = (props) => {
  return (
    <div className="theater">
      <ReactPlayer
        url={`https://vimeo.com/${props.vimeo_id}`}
        width="1800px"
        height="1100px"
        loop={true}
        playing={true}
        mute={true}
        controls={true}
        volume={"1"}
        className="react-player"
      />
    </div>
  );
};

export default Theater;

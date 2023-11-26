import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import useWindowDimensions from "../utils/getWindowDimensions";
import { useMediaQuery } from "react-responsive";

const Theater = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });

  const { height, width } = useWindowDimensions();
  const divStyle = {
    width: width * 0.65,
    height: "auto",
  };

  let youtubeWidth = width;
  if (isDesktopOrLaptop) {
    youtubeWidth = width / 3.4;
  }

  return (
    <div className="theater" style={divStyle}>
      <Vimeo
        video={props.vimeo_id}
        autoplay={true}
        width={width * 0.65}
        showTitle={false}
        muted={true}
        loop={true}
      />
    </div>
  );
};

export default Theater;

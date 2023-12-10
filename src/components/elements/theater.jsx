import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";

const Theater = (props) => {
  let uri;
  if (props.vimeo_id != "undefined") {
    uri = `https://vimeo.com/${props.vimeo_id}`;
  }

  const [width, setWidth] = useState("100%");
  const theaterRef = useRef(null);

  useEffect(() => {
    if (theaterRef.current) {
      const parentWidth = theaterRef.current.clientWidth;
      setWidth(parentWidth);
    }
  }, []);

  return (
    <div id="theater" className="theater">
      <ReactPlayer
        style={{ maxHeight: "1800px" }}
        width={width}
        height={"900px"}
        url={uri}
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

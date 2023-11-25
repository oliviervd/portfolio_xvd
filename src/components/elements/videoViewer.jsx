import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import YouTube from "react-youtube";
import useWindowDimensions from "../utils/getWindowDimensions";
import { useMediaQuery } from "react-responsive";

const VideoViewer = (props) => {
  const { width, height } = useWindowDimensions();
  const scale = props.scale;
  console.log(scale);
  let videoViewer;
  let youtube = false;
  let id;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });

  let youtubeWidth = width;
  if (isDesktopOrLaptop) {
    youtubeWidth = width / 3.4;
  }

  function changeControls(e) {
    e.target.controls = "true";
  }

  if (props.youtube_id) {
    if (props.youtube_id.length > 2) {
      youtube = true;
      id = props.youtube_id;
      console.log(id);
    }
  }

  if (props.vimeo_id !== "") {
    videoViewer = (
      <div>
        <Vimeo
          width={width * scale}
          video={props.vimeo_id}
          showTitle={false}
          loop={true}
          showByline={false}
          showPortrait={false}
          controls={true}
          responsive={true}
        />
      </div>
    );
  }

  if (youtube) {
    videoViewer = (
      <div>
        <YouTube
          videoId={props.youtube_id}
          opts={{
            width: youtubeWidth,
            height: "300",
            opts: { showInfo: false, controls: false },
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              controls: 0,
            },
          }}
        />
      </div>
    );
  }

  return (
    <div className="videoContainer">
      <div className="videoViewer">{videoViewer}</div>
    </div>
  );
};

export default VideoViewer;

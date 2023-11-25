import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import YouTube from "react-youtube";
import useWindowDimensions from "../utils/getWindowDimensions";

const VideoViewer = (props) => {
  const { width, height } = useWindowDimensions();
  const scale = props.scale;
  let videoViewer;
  let youtube = false;
  let id;

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
            width: width / 3.4,
            height: "300",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0, // false
              controls: 0,
            },
          }}
        />
      </div>
    );
  }

  return <div>{videoViewer}</div>;
};

export default VideoViewer;


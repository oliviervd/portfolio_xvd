import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import useWindowDimensions from "../utils/getWindowDimensions";

const VideoViewer = (props) => {

    //todo: add placeholder if no Vimeo.
    const {width, height} = useWindowDimensions();
    const scale = props.scale;
    let videoViewer;

    if (props.vimeo_id !== "") {
        videoViewer = <Vimeo
            width={width*scale}
            video={props.vimeo_id}
            showTitle={false}
            muted={true}
            loop={true}
            showByline={false}
            showPortrait={false}
        />
    }

    return(
        <div className="video-small">
            {videoViewer}
        </div>
    )
}

export default VideoViewer;
import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import useWindowDimensions from "./getWindowDimensions";

const VideoViewer = (props) => {

    const {width, height} = useWindowDimensions();

    return(
        <div className="video-small">
            <Vimeo width={width*0.2} video={props.vimeo_id}></Vimeo>
        </div>
    )
}

export default VideoViewer;
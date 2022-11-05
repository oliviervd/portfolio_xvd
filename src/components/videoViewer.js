import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const VideoViewer = (props) => {

    return(
        <div>
            <Vimeo video={props.vimeo_id}></Vimeo>
        </div>
    )
}

export default VideoViewer
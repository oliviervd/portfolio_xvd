import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import useWindowDimensions from "../utils/getWindowDimensions";

const VideoViewer = (props) => {

    //todo: add placeholder if no Vimeo.
    const {width, height} = useWindowDimensions();
    const scale = props.scale;
    let videoViewer;

    function changeControls(e){
        e.target.controls = 'true';
    }

    if (props.vimeo_id !== "") {
        videoViewer =
        <div>
            <Vimeo
                width={width*scale}
                video={props.vimeo_id}
                showTitle={false}
                loop={true}
                showByline={false}
                showPortrait={false}
                controls={true}
                responsive={true}
            />
        </div>
    }

    return(
        <div>
            {videoViewer}
        </div>
    )
}

export default VideoViewer;
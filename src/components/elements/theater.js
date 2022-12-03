import React, {useState, useRef, useLayoutEffect, useEffect} from "react";
import Vimeo from "@u-wave/react-vimeo";
import useWindowDimensions from "../utils/getWindowDimensions";

const Theater = (props) => {

    const { height, width} = useWindowDimensions();
    const divStyle = {
        width: width*0.65,
        height: height
    }
    return(
        <div style ={divStyle}>
            <Vimeo className="theater"
                   video={props.vimeo_id}
                   autoplay={true}
                   width={width*0.65}
                   showTitle={false}
                   muted={true}
                   loop={true}
            />
        </div>
    )
}

export default Theater;
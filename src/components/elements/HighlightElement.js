import React, {lazy, Suspense, useState} from "react";

const Theater = lazy(()=>import("./theater"))

const HighlightElement = (props) => {

    let vimeoID;

    if (props.windowIsOpen) {
        vimeoID = props.detailDB[0].vimeo
    }


    return(
        <div>
            {props.windowIsOpen &&
                <div>
                    <Suspense>
                        <Theater vimeo_id={vimeoID}/>
                    </Suspense>
                    <button onClick={()=>props.setDetailNarrativeWindowOpen(false)}>close</button>
                </div>
            }
        </div>
    )
}
export default HighlightElement;
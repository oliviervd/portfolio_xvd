import React, {lazy, Suspense, useState} from "react";

const Theater = lazy(()=>import("./theater"))
const PortfolioList = lazy(()=> import("../elements/PotrfolioList"))


const HighlightElement = (props) => {

    let vimeoID, title, description, year, type;

    if (props.windowIsOpen) {
        vimeoID = props.detailDB[0].vimeo;
        title = props.detailDB[0].title;
        description = props.detailDB[0].description;
        year = props.detailDB[0].year;
        type = props.detailDB[0].type;
    }


    return(
        <div>
            {!props.windowIsOpen &&
                <div>
                    <PortfolioList initGrid={props.initGrid} setShowWorkID={props.setShowWorkID}
                                   setDetailNarrativeWindowOpen={props.setDetailNarrativeWindowOpen}
                                   setDetailBrandedWindowOpen={props.setDetailBrandedWindowOpen}
                                   setHideBranded={props.setHideBranded} setDetailDB={props.setDetailDB}/>
                </div>
            }
            {props.windowIsOpen &&
                <div>
                    <div className={"gridH-1-19"}>
                        <div>
                            <div className={"grid-9-1"}>
                                <div className={"grid-3-4-3"}>
                                    <div>
                                        <p className={""} >{type}</p>
                                    </div>
                                    <h2 className={"upper"}>{title}</h2>
                                    <div>
                                        <p>{year}</p>
                                    </div>
                                </div>
                                <p className={"link"} onClick={props.initGrid}>close</p>
                            </div>
                            <div>
                                <p>{description}</p>
                            </div>
                        </div>
                        <div>
                            <Suspense>
                                <Theater vimeo_id={vimeoID}/>
                            </Suspense>
                            <div className={"lineBottom"}></div>
                        </div>
                    </div>
                    {/* description box (if needed todo: check with xavier)
                    <div className={"grid-7-3"}>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    */}

                </div>
            }
        </div>
    )
}
export default HighlightElement;
import React, {Suspense, lazy, useState, useLayoutEffect, useRef} from "react";
import HighlightElement from "../elements/HighlightElement";

const Header = lazy(()=>import("../elements/header"))
const PortfolioElement = lazy(()=> import("../elements/PortfolioElement"))

const Home = () => {

    const [showWorkID, setShowWorkID] = useState("test");
    const [detailNarrativeWindowOpen, setDetailNarrativeWindowOpen] = useState(false);
    const [detailBrandedWindowOpen, setDetailBrandedWindowOpen] = useState(false);
    //const mainGrid = useRef();

    console.log(showWorkID, detailNarrativeWindowOpen, detailBrandedWindowOpen);

    return(
        <div className="full_page">
            <div className="grid-30-5-30-5-30 full_page">
                {/* first column - highlights + header
                todo: add map function
                */}
                <div className="gridH-20-1-79 lineV" style={{overflow: "hidden"}}>
                    <div className={"lineBottom lineTop"}>
                        <Suspense>
                            <Header/>
                        </Suspense>
                    </div>
                    <br/>

                    <div/>
                    <div className={"lineBottom lineTop"}>
                        <Suspense>
                            <HighlightElement/>
                        </Suspense>
                    </div>
                </div>
                <div className="lineV">
                    <h2 className="text-rotate accent upper">narrative content</h2>
                </div>
                {/* second column - narrative
                fix : https://stackoverflow.com/questions/34314474/css-infinite-scrolling-div
                todo: add map function
                */}
                <div className={"lineV rowScroll_narrative"}>
                    <Suspense>
                        <PortfolioElement type={true} className="PortfolioElement_narrative" kind={"narrative content"}
                                          setShowWorkID = {setShowWorkID} setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                          setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}/>
                    </Suspense>
                    <Suspense>
                        <PortfolioElement type={true} className="PortfolioElement_narrative" kind={"narrative content"}
                                          setShowWorkID = {setShowWorkID} setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                          setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}/>
                    </Suspense>
                </div>
                <div className="lineV">
                    <h2 className="text-rotate accent upper">branded content</h2>
                </div>

                {/* third column - branded
                todo: add map function
                */}
                    <div className={"lineV rowScroll_branded"}>
                        <Suspense>
                            <PortfolioElement type={false} className="PortfolioElement_branded" kind={"branded content"}
                                              setShowWorkID = {setShowWorkID} setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                                              setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}/>
                        </Suspense>
                        <Suspense>
                            <PortfolioElement type={false} className="PortfolioElement_branded" kind={"branded content"}
                                              setShowWorkID = {setShowWorkID} setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                                              setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}/>
                        </Suspense>
                    </div>

            </div>
        </div>
    )
}

export default Home;
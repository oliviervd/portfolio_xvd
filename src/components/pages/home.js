import React, {Suspense, lazy, useState} from "react";

const Header = lazy(()=>import("../elements/header"))
const PortfolioElement = lazy(()=> import("../elements/PortfolioElement"))
const HighlightElement = lazy(()=> import("../elements/HighlightElement"))

const Home = () => {

    const [showWorkID, setShowWorkID] = useState("test");
    const [detailNarrativeWindowOpen, setDetailNarrativeWindowOpen] = useState(false);
    const [detailBrandedWindowOpen, setDetailBrandedWindowOpen] = useState(false);
    const [hideNarrative, setHideNarrative] = useState(false);
    const [hideBranded, setHideBranded] = useState(false);
    const [detailDB, setDetailDB] = useState("");

    console.log(showWorkID);
    console.log(detailDB);

    //const mainGrid = useRef();

    function initGrid() {
        setDetailBrandedWindowOpen(false)
        setDetailNarrativeWindowOpen(false)
        setHideNarrative(false);
        setHideBranded(false);
    }


    return(
        <div className="full_page">
            <div className={detailNarrativeWindowOpen?"grid-65-5-30 full_page":"grid-30-5-30-5-30 full_page"}>
                {/* first column - highlights + header
                todo: add map function
                */}
                <div className="gridH-20-1-79 lineV" style={{overflow: "hidden"}}>
                    <div className={"lineBottom lineTop"}>
                        <Suspense>
                            <Header initGrid={initGrid}/>
                        </Suspense>
                    </div>
                    <br/>
                    <div className={detailNarrativeWindowOpen?"lineBottom lineTop":"lineBottom lineTop scroller"}>
                        <Suspense>
                            <HighlightElement setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                              setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                                              windowIsOpen={detailNarrativeWindowOpen} showWorkID={showWorkID}
                                              detailDB={detailDB} setDetailDB={setDetailDB}
                                              initGrid={initGrid} setShowWorkID={setShowWorkID}
                                              setHideBranded={setHideBranded} setHideNarrative={setHideNarrative}/>
                        </Suspense>
                    </div>
                </div>

                {(!hideNarrative) &&
                    <div className="lineV" >
                        <h2 className="text-rotate accent upper">narrative content</h2>
                    </div>
                }


                {(!hideNarrative) &&
                        <div className={"lineV rowScroll_narrative scroller"}>
                            <Suspense>
                                <PortfolioElement type={true} className="PortfolioElement_narrative" kind={"narrative content"}
                                                  setShowWorkID = {setShowWorkID} setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                                  setDetailBrandedWindowOpen={setDetailBrandedWindowOpen} setDetailDB={setDetailDB}
                                                  setHideNarrative={setHideNarrative} setHideBranded={setHideBranded}/>
                            </Suspense>
                            <Suspense>
                                <PortfolioElement type={true} className="PortfolioElement_narrative" kind={"narrative content"}
                                                  setShowWorkID = {setShowWorkID} setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                                  setDetailBrandedWindowOpen={setDetailBrandedWindowOpen} setDetailDB={setDetailDB}
                                                  setHideNarrative={setHideNarrative} setHideBranded={setHideBranded}/>
                            </Suspense>
                        </div>


                }

                {(!hideBranded) &&
                    <div className="lineV">
                        <h2 className="text-rotate accent upper">branded content</h2>
                    </div>
                }



                {/* third column - branded
                todo: add map function
                */}

                {(!hideBranded) &&
                    <div className={"lineV rowScroll_branded scrollerB"}>
                        <Suspense>
                            <PortfolioElement type={false} className="PortfolioElement_branded" kind={"branded content"}
                                              setShowWorkID = {setShowWorkID} setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                                              setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen} setDetailDB={setDetailDB}
                                              setHideNarrative={setHideNarrative} setHideBranded={setHideBranded}/>
                        </Suspense>
                        <Suspense>
                            <PortfolioElement type={false} className="PortfolioElement_branded" kind={"branded content"}
                                              setShowWorkID = {setShowWorkID} setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                                              setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen} setDetailDB={setDetailDB}
                                              setHideNarrative={setHideNarrative} setHideBranded={setHideBranded}/>
                        </Suspense>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home;
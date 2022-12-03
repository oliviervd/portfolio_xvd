import React, {Suspense, lazy, useState} from "react";

const Header = lazy(()=>import("../elements/header"))
const PortfolioElement = lazy(()=> import("../elements/PortfolioElement"))
const HighlightElement = lazy(()=> import("../elements/HighlightElement"))

const Home = () => {

    const [showWorkID, setShowWorkID] = useState("test");
    const [detailNarrativeWindowOpen, setDetailNarrativeWindowOpen] = useState(false);
    const [detailBrandedWindowOpen, setDetailBrandedWindowOpen] = useState(false);
    const [detailDB, setDetailDB] = useState("");

    console.log(detailDB);

    //const mainGrid = useRef();


    return(
        <div className="full_page">
            <div className={detailNarrativeWindowOpen?"grid-65-5-30 full_page":"grid-30-5-30-5-30 full_page"}>
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
                    <div className={"lineBottom lineTop"}>
                        <Suspense>
                            <HighlightElement setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                              windowIsOpen={detailNarrativeWindowOpen} showWorkID={showWorkID}
                                              detailDB={detailDB}/>
                        </Suspense>
                    </div>
                </div>
                <div className="lineV">
                    <h2 className="text-rotate accent upper">narrative content</h2>
                </div>
                {/* second column - narrative
                todo: add map function
                */}
                <div className={"lineV rowScroll_narrative"}>
                    <Suspense>
                        <PortfolioElement type={true} className="PortfolioElement_narrative" kind={"narrative content"}
                                          setShowWorkID = {setShowWorkID} setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                          setDetailBrandedWindowOpen={setDetailBrandedWindowOpen} setDetailDB={setDetailDB}/>
                    </Suspense>
                    <Suspense>
                        <PortfolioElement type={true} className="PortfolioElement_narrative" kind={"narrative content"}
                                          setShowWorkID = {setShowWorkID} setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                                          setDetailBrandedWindowOpen={setDetailBrandedWindowOpen} setDetailDB={setDetailDB}/>
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
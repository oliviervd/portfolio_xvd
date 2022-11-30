import React, {Suspense, lazy} from "react";
import HighlightElement from "../elements/HighlightElement";

const Header = lazy(()=>import("../elements/header"))
const PortfolioElement = lazy(()=> import("../elements/PortfolioElement"))

const Home = () => {
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
                todo: add map function
                */}
                <div className={"lineV rowScroll scroll-div"}>
                    <Suspense>
                        <PortfolioElement className="" kind={"narrative content"}/>
                    </Suspense>
                    <Suspense>
                        <PortfolioElement className="" kind={"narrative content"}/>
                    </Suspense>
                    <Suspense>
                        <PortfolioElement className="" kind={"narrative content"}/>
                    </Suspense>
                </div>
                <div className="lineV">
                    <h2 className="text-rotate accent upper">branded content</h2>
                </div>

                {/* third column - branded
                todo: add map function
                */}
                    <div className={"lineV rowScroll scroll-div"}>
                        <Suspense>
                            <PortfolioElement className="" kind={"branded content"}/>
                        </Suspense>
                        <Suspense>
                            <PortfolioElement className="" kind={"branded content"}/>
                        </Suspense>
                        <Suspense>
                            <PortfolioElement className="" kind={"branded content"}/>
                        </Suspense>
                    </div>

            </div>
            {/*
            <div className="gridH-20-1-79">
                <div>
                    <Header/>
                </div>
                <div className={"lineBottom lineTop"}/>
                <div className="grid_even--3">
                    <div className="scrollContainer lineV">
                        highlight
                    </div>
                    <div className="scrollContainer lineV">
                        narrative
                    </div>
                    <div className="scrollContainer lineV">
                        branded
                    </div>
                </div>
            </div>
            */}

        </div>
    )
}

export default Home;
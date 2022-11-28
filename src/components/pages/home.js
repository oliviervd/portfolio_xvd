import React, {Suspense} from "react";
import Header from "../elements/header";
import HighlightElement from "../elements/HighlightElement";
import PortfolioElement from "../elements/PortfolioElement";

const Home = () => {
    return(
        <div className="full_page">
            <div className="grid-30-5-30-5-30 full_page">
                {/* first column - highlights + header
                todo: add map function
                */}
                <div className="gridH-20-1-79 lineV">
                    <div className={"lineBottom lineTop"}>
                        <Header/>
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
                <div className={"lineV scroll-div"}>
                    <PortfolioElement kind={"narrative content"}/>
                    <PortfolioElement kind={"narrative content"}/>
                    <PortfolioElement kind={"narrative content"}/>

                </div>
                <div className="lineV">
                    <h2 className="text-rotate accent upper">branded content</h2>
                </div>

                {/* third column - branded
                todo: add map function
                */}
                <div className={"lineV scroll-div"}>
                    <PortfolioElement kind={"branded content"}/>
                    <PortfolioElement kind={"branded content"}/>
                    <PortfolioElement kind={"branded content"}/>
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
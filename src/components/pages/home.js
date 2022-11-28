import React, {Suspense} from "react";
import Header from "../elements/header";
import HighlightElement from "../elements/HighlightElement";
import PortfolioElement from "../elements/PortfolioElement";

const Home = () => {
    return(
        <div style={{height:"100vh", overflow: "hidden"}}>
            <div className="grid-30-5-30-5-30 full_page">
                {/* first column - highlights + header
                todo: add map function
                */}
                <div className="gridH-20-1-79 lineV">
                    <div className={"lineBottom lineTop"}>
                        <Header/>
                    </div>
                    <br/>
                    <img className="image_fit" src="https://static.fabrik.io/vgy/f4adf83578ba1dea.jpg?lossless=1&w=2880&h=5120&fit=max&s=9499b1ffc3c0de7b045b8583801aae09"/>

                    <div/>
                    <div className={"lineBottom lineTop"}>
                        <Suspense>
                            <HighlightElement/>
                        </Suspense>
                    </div>
                </div>
                <div className="lineV">
                    <h2 className="text-rotate">narrative content</h2>
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
                    <h2 className="text-rotate">branded content</h2>
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
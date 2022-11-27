import React from "react";
import Theater from "../elements/theater";
import Header from "../elements/header";

const Home = () => {
    return(
        <div>
            <div className="grid_even--3">
                {/* first column - highlights + header*/}
                <div className="gridH-20-1-79 lineV">
                    <div className={"lineBottom lineTop"}>
                        <Header/>
                    </div>
                    <div/>
                    <div className={"lineBottom lineTop"}>
                        <h3>scroller highlighted work</h3>
                    </div>
                </div>
                {/* second column - narrative*/}
                <div className={"lineV"}>
                    <h3>scroller narrative work</h3>
                </div>
                {/* third column - branded*/}
                <div className={"lineV"}>
                    <h3>scroller branded work</h3>
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
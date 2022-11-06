import React from "react";
import PortfolioGrid from "../elements/portfolioGrid";
import Header from "../elements/header";

const NarrativeContentHome = () => {
    return(
        <div>
            <Header/>
            <div>
                <PortfolioGrid kind={"narrative content"}/>
            </div>
        </div>
    );
}

export default NarrativeContentHome;
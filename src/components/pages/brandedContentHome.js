import React from "react";
import PortfolioGrid from "../elements/portfolioGrid";
import Header from "../elements/header";

const BrandedContentHome = () => {

    return(
        <div>
            <Header/>
            <PortfolioGrid kind={"branded content"}/>
        </div>
    )
}

export default BrandedContentHome;
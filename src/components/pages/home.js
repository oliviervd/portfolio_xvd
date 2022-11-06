import React from "react";
import Theater from "../elements/theater";
import Header from "../elements/header";

const Home = () => {
    return(
        <div>
            <div>
                <Header/>
                <Theater vimeo_id="668564452"/>
            </div>
        </div>
    )
}

export default Home;
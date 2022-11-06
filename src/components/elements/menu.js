import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {

    return(
        <div className="menu-bar grid-3-3-3">
            <Link className="menu-item" to={"../narrative"}>
                <h2>{`narrative \n content`}</h2>
            </Link>
            <Link className="menu-item" to={"../branded"}>
                <h2>{`branded \n content`}</h2>
            </Link>
            <Link className="menu-item" to={"../cleint-space"}>
                <h2>{`client \n space`}</h2>
            </Link>
        </div>
    )
}

export default Menu;
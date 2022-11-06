import React from "react";
import Menu from "./menu";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div>
            <div className="grid-3-4-3">
                <div className="H_margin-20p">
                    <Link className="menu-item" to={"../"}>
                        <h1 className="upper">Xavier Van D'huynslager</h1>
                    </Link>
                    <p>
                        Xavier Van D'huynslager is a freelance Director of Photography based in Ghent, Belgium.
                        -Available for global hire.- www.xaviervandhuynslager.be +32 (0) 496 70 36 47
                    </p>
                </div>
                <div/>
                <div>
                    <Menu/>
                </div>
            </div>
            <div className="line"/>
            <div className="line"/>
        </div>
    )
}

export default Header;
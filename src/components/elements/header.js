import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import {SlEnvolope, SlSocialInstagram, SlSocialLinkedin, SlPhone, SlMenu} from "react-icons/sl"
import {SiImdb} from "react-icons/si"


const Header = (props) => {

    return(

        <div className={"gridH-4-1 header"}>
            {props.isDesktopOrLaptop &&
                <div className="menu-item" onClick={props.initGrid}>
                    <h1 className="upper accent">Xavier Van D'huynslager</h1>
                    {props.showBio &&
                        <p>Xavier Van D'huynslager is a freelance Director of Photography based in Ghent, Belgium. -Available for global hire.</p>
                    }
                </div>
            }

            {props.isTabletOrMobile &&
                <div className="menu-item" onClick={props.initGrid}>
                    <div className={"grid-9-1"}>
                        <h1 className="upper accent">Xavier Van D'huynslager</h1>
                        <div className={"center"} style={{margin: "1rem"}}>
                            <HamburgerMenu/>
                        </div>
                    </div>
                    {props.showBio &&
                        <p>Xavier Van D'huynslager is a freelance Director of Photography based in Ghent, Belgium. -Available for global hire.</p>
                    }
                </div>
            }

            {/*
                    <div>
                        <img className="image_fit" src="media/xav.jpg"/>
                    </div>
                    */}
            <div className={"grid-5-1-4"}>
                <div>
                    <p style={{margin: 0, marginLeft:20}}>+32 (0) 496 70 36 47</p>
                </div>
                <div></div>
                <div className={"grid_even--4"}>
                    <a href={"mailto:xavier.vandhuynslager@hotmail.com"}>
                        <SlEnvolope className={"center"}/>
                    </a>
                    <a href={"https://www.instagram.com/xaviervandhuynslager/"} target="_blank">
                        <SlSocialInstagram className={"center"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/xavier-van-d-huynslager-bb1b27103/"} target="_blank">
                        <SlSocialLinkedin className={"center"}/>
                    </a>
                    <a href={"https://www.imdb.com/name/nm5851865/"} target="_blank">
                        <SiImdb className={"center"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
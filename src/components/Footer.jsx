import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <p> &copy; 2023 AltunIT - All rights reserved</p>
                <FacebookIcon/><InstagramIcon/> <TwitterIcon/>
            </div>
        </div>
    );
}

export default Footer;

import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FacebookIcon/><InstagramIcon/> <TwitterIcon/>
            </div>
            <p> &copy; 2023 Created with ❤️ by Hatice Altun for a better WEB</p>
        </div>
    );
}

export default Footer;

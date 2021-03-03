import { Link } from "gatsby"
import React from "react"

import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";
import "./footer.css"

const Footer = () => (
    <footer className="footer flex-center">
    <div>
    <Link to="https://github.com/LaneGarner" target="_blank">
        <div className="flex-center">
            <SiGithub size="2em" />
            GitHub
        </div>
    </Link>
    <Link to="https://www.linkedin.com/in/lanegarner" target="_blank">
        <div className="flex-center">
            <SiLinkedin size="2em" />
            LinkedIn
        </div>
    </Link>
    <Link to="https://twitter.com/lanegarner" target="_blank">
        <div className="flex-center">
            <SiTwitter size="2em" />
            Twitter
        </div>
    </Link>
    </div>
    © {new Date().getFullYear()}, Lane Garner

</footer>
)

export default Footer

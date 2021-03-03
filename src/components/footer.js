import { Link } from "gatsby"
import React from "react"
import "./footer.css"

const Footer = () => (
    <footer className="footer">
    <div className="flex-center">
    <Link to="https://github.com/LaneGarner" target="_blank">
        GitHub
    </Link>
    <Link to="https://www.linkedin.com/in/lanegarner" target="_blank">
        LinkedIn
    </Link>
    <Link to="https://twitter.com/lanegarner" target="_blank">
        Twitter
    </Link>
    </div>
    © {new Date().getFullYear()}, Lane Garner

</footer>
)

export default Footer

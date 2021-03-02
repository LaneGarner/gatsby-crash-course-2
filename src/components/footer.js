import { Link } from "gatsby"
import React from "react"
import "./footer.css"

const Footer = () => (
    <footer className="footer">
    <div className="flex-center">
    <Link to="https://github.com/LaneGarner">
        GitHub
    </Link>
    <Link to="https://github.com/LaneGarner">
        LinkedIn
    </Link>
    <Link to="https://github.com/LaneGarner">
        Twitter
    </Link>
    </div>
    © {new Date().getFullYear()}, Lane Garner

</footer>
)

export default Footer

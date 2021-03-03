import React from "react";
import Link from "gatsby-link";
import "./menu.css"

const Menu = () => (
    <div className="menu">
        <ul>
            <li><Link to ="/">About</Link></li>
            <li><Link to ="/#portfolio">Portfolio</Link></li>
            <li><Link to ="/blog">Blog</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
        </ul>
    </div>
)

export default Menu

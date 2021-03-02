import React from "react";
import Link from "gatsby-link";
import "./menu.css"

const Menu = () => (
    <div className="menu">
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/blog">Blog</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
        </ul>
        
    </div>
)

export default Menu

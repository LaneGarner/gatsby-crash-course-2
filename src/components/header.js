import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#272727`,
      marginBottom: `0`,
      height: "11em"
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >


        <Link
          to="/"
          style={{
            color: `#FAFAFA`,
            textDecoration: `none`,
          }}
        >
        <div
          style={{
            margin: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo width="122.3365" height="92.13775" />
        </div>
          <h1 style={{ margin: ".5em" }}>{siteTitle}</h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

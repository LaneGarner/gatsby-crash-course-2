/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu";


import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
      }}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Menu />
      </div>
      <div
        style={{
          margin: `15em auto 0 auto`,
          width: "80%",
          // maxWidth: 960,
          minHeight: "70vh",
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

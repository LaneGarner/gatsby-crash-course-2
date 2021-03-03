import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiMysql, SiGatsby, SiFirebase, SiBootstrap, SiAdobe, SiRedux, SiSass, SiFigma, SiGithub, SiGoogle } from "react-icons/si";

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="about">
      {/* <img src="." alt=""/> */}
      <h1>About</h1>
      <div className="about-icons">
        <SiReact size="2em" />
        <SiJavascript size="2em" />
        <SiCss3 size="2em" />
        <SiHtml5 size="2em" />
        <SiRedux size="2em" />
        <SiMysql size="2em" />
        <SiSass size="2em" />
        <SiGatsby size="2em" />
        <SiFirebase size="2em" />
        <SiBootstrap size="2em" />
        <SiAdobe size="2em" />
        <SiFigma size="2em" />
        <SiGithub size="2em" />
        <SiGoogle size="2em" />
      </div>
      <p>Hi, I'm Lane, a web developer and musician who recently completed the fullstack bootcamp at Austin Coding Academy.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a hendrerit ante, interdum aliquet quam. Vestibulum et arcu consequat, eleifend sem nec, viverra sem. Nam id nisi ipsum. Fusce feugiat lectus vel tortor interdum cursus. Maecenas posuere mi quis nunc tristique ultricies. Duis velit justo, cursus ac faucibus ac, luctus eget libero. Mauris vel nisl dui. Donec non metus eget dolor pellentesque sagittis ornare in neque. Mauris tincidunt urna ex, ut lacinia augue facilisis non. Mauris elementum nunc eget massa scelerisque, sed fringilla elit luctus. Aliquam sapien lacus, condimentum vehicula lectus vitae, vestibulum mollis risus. Praesent sit amet rhoncus lacus, at volutpat libero. Donec aliquet fermentum nisi vel sollicitudin. Aliquam quis sagittis lorem. Suspendisse et enim vel erat consectetur posuere.</p>
    </div>
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <p>These are some of my favorite projects that I've built.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a hendrerit ante, interdum aliquet quam. Vestibulum et arcu consequat, eleifend sem nec, viverra sem. Nam id nisi ipsum. Fusce feugiat lectus vel tortor interdum cursus. Maecenas posuere mi quis nunc tristique ultricies. Duis velit justo, cursus ac faucibus ac, luctus eget libero. Mauris vel nisl dui. Donec non metus eget dolor pellentesque sagittis ornare in neque. Mauris tincidunt urna ex, ut lacinia augue facilisis non. Mauris elementum nunc eget massa scelerisque, sed fringilla elit luctus. Aliquam sapien lacus, condimentum vehicula lectus vitae, vestibulum mollis risus. Praesent sit amet rhoncus lacus, at volutpat libero. Donec aliquet fermentum nisi vel sollicitudin. Aliquam quis sagittis lorem. Suspendisse et enim vel erat consectetur posuere.</p>
      <div className="card-container portfolio-container">
        <div className="card flex-center">
          <h2>Title</h2>
          <p>Description</p>
          <div style={{backgroundColor: "white", width: "200px", height: "150px", color: "#333"}}>Preview/link</div>
          <div>
            <span> Link </span>
            <span> GitHub </span>
          </div>
        </div>
        <div className="card flex-center">
          <h2>Title</h2>
          <p>Description</p>
          <div style={{backgroundColor: "white", width: "200px", height: "150px", color: "#333"}}>Preview/link</div>
          <div>
            <span> Link </span>
            <span> GitHub</span>
          </div>
        </div>
        <div className="card flex-center">
          <h2>Title</h2>
          <p>Description</p>
          <div style={{backgroundColor: "white", width: "200px", height: "150px", color: "#333"}}>Preview/link</div>
          <div>
            <span> Link </span>
            <span> GitHub </span>
          </div>
        </div>
        <div className="card flex-center">
          <h2>Title</h2>
          <p>Description</p>
          <div style={{backgroundColor: "white", width: "200px", height: "150px", color: "#333"}}>Preview/link</div>
          <div>
            <span> Link </span>
            <span> GitHub </span>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="about">
      <h1>About</h1>
      <p>Hi, I'm Lane. I am web developer and musician who recently completed the fullstack bootcamp at Austin Coding Academy.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a hendrerit ante, interdum aliquet quam. Vestibulum et arcu consequat, eleifend sem nec, viverra sem. Nam id nisi ipsum. Fusce feugiat lectus vel tortor interdum cursus. Maecenas posuere mi quis nunc tristique ultricies. Duis velit justo, cursus ac faucibus ac, luctus eget libero. Mauris vel nisl dui. Donec non metus eget dolor pellentesque sagittis ornare in neque. Mauris tincidunt urna ex, ut lacinia augue facilisis non. Mauris elementum nunc eget massa scelerisque, sed fringilla elit luctus. Aliquam sapien lacus, condimentum vehicula lectus vitae, vestibulum mollis risus. Praesent sit amet rhoncus lacus, at volutpat libero. Donec aliquet fermentum nisi vel sollicitudin. Aliquam quis sagittis lorem. Suspendisse et enim vel erat consectetur posuere.</p>
    </div> */}
  </Layout>
)

export default IndexPage

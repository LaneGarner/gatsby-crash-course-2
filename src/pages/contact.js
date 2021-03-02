import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../components/layout"

const ContactFormPage = () => (
    <Layout>
        <div className="flex-center">
            <h1>Contact</h1>
            <form name="feedback" method="POST" data-netlify-recaptcha="true" data-netlify="true">
            <input type="hidden" name="form-name" value="feedback" />
            <div>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" />
            </div>
            <div>
                <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
            </div>
            <div className="flex-center">
                <button type="submit">Send</button>
            </div>
            </form>
        </div>
    </Layout>
)

export default ContactFormPage

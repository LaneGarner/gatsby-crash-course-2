import React from "react"
// import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../components/layout"

const ContactFormPage = () => (
    <Layout>
        <div className="flex-center">
            <h1>Contact</h1>
            <form name="contact-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" action="/thank-you">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" />
            </div>
            <div data-netlify-recaptcha="true"></div>
            {/* <ReCAPTCHA sitekey={process.env.SITE_RECAPTCHA_KEY} /> */}
            <div className="flex-center">
                <button type="submit">Send</button>
            </div>
            </form>
        </div>
    </Layout>
)

export default ContactFormPage

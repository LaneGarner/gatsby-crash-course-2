import React from 'react'
import Layout from "../components/layout"

const Contact = () => {
    return (
        <Layout>
            <form action="SUBMIT" data-netlify="true" className="flex-center">
                <div class="field">
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput" name="nameInput" type="text" placeholder="name"/>
                </div>
                <div class="field">
                    <label htmlFor="emailInput">Name</label>
                    <input id="emailInput" name="emailInput" type="email" placeholder="email@address.com"/>
                </div>
                <div class="field">
                    <label htmlFor="messageInput">Message</label>
                    <textarea id="messageInput" name="messageInput" placeholder="message" minRows="2" />
                </div>
                <div class="field">
                    <label htmlFor="fileInput">File</label>
                    <input type="file" id="fileInput" name="fileInput" placeholder="Upload file" />
                </div>
                <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}

export default Contact

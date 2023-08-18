import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import ContactUs from "./contact/contactUs"

const Contact = () => {
	return (
		<>
			<Header pageTitle="Contact us" />
			<ContactUs />
			<Footer />
		</>
	)
}

export default Contact

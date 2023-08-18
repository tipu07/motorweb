import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import TermsContent from "./termsConditions/termsContent"

const TermsConditions = () => {
	return (
		<>
			<Header pageTitle="Terms & conditions" />
			<TermsContent />
			<Footer />
		</>
	)
}

export default TermsConditions

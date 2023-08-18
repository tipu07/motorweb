import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import PolicyContent from "./privacyPolicy/policyContent"

const PrivacyPolicy = () => {
	return (
		<>
			<Header pageTitle="Privacy Policy" />
			<PolicyContent />
			<Footer />
		</>
	)
}

export default PrivacyPolicy

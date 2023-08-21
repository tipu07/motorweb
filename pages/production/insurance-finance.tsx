import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Finance from "./insuranceFinance/finance"
import Benefits from "./insuranceFinance/benefits"
import AudienceTone from "./insuranceFinance/audienceTone"
import BetterDecision from "@/components/betterDecision"

const InsuranceFinance = () => {
	return (
		<>
			<Header pageTitle="Insurance & Finance" />
			<Finance />
			<Benefits />
			<AudienceTone />
			<BetterDecision />
			<Footer />
		</>
	)
}

export default InsuranceFinance

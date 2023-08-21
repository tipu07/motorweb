import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import OurPartners from "./partners/ourPartners"
import PartnersBlocks from "./partners/partnersBlocks"
import BetterDecision from "@/components/betterDecision"

const Partners = () => {
	return (
		<>
			<Header pageTitle="Partners" />
			<OurPartners />
			<PartnersBlocks />
			<BetterDecision />
			<Footer />
		</>
	)
}

export default Partners

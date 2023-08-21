import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import DealershipsDMS from "./marketplace/dealershipsDMS"
import Automate from "./marketplace/automate"
import Organization from "./marketplace/organization"
import BetterDecision from "@/components/betterDecision"

const Dealerships = () => {
	return (
		<>
			<Header pageTitle="Marketplace, Parts & E-commerce" />
			<DealershipsDMS />
			<Automate />
			<Organization />
			<BetterDecision />
			<Footer />
		</>
	)
}

export default Dealerships

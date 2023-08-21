import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import DealershipsDMS from "./dealerships/dealershipsDMS"
import Automate from "./dealerships/automate"
import Organization from "./dealerships/organization"
import BetterDecision from "@/components/betterDecision"

const Dealerships = () => {
	return (
		<>
			<Header pageTitle="Dealerships and DMS" />
			<DealershipsDMS />
			<Automate />
			<Organization />
			<BetterDecision />
			<Footer />
		</>
	)
}

export default Dealerships

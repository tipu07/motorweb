import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import DealershipsDMS from "./roadSideAssistance/dealershipsDMS"
import Automate from "./roadSideAssistance/automate"
import Organization from "./roadSideAssistance/organization"
import BetterDecision from "@/components/betterDecision"

const Dealerships = () => {
	return (
		<>
			<Header pageTitle="Road Side Assistance, Parking & Government" />
			<DealershipsDMS />
			<Automate />
			<Organization />
			<BetterDecision />
			<Footer />
		</>
	)
}

export default Dealerships

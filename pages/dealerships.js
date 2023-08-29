import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import DealershipsDMS from "./dealerships/dealershipsDMS"
import Automate from "./dealerships/automate"
import Organization from "./dealerships/organization"
import BetterDecision from "@/components/betterDecision"

export default function Dealerships() {
	return (
		<>
			<Head>
				<title>Dealerships and DMS — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<DealershipsDMS />
			<Automate />
			<Organization />
			<BetterDecision />
			<Footer />
		</>
	)
}

import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import DealershipsDMS from "./marketplace/dealershipsDMS"
import Automate from "./marketplace/automate"
import Organization from "./marketplace/organization"
import BetterDecision from "@/components/betterDecision"

export default function Dealerships() {
	return (
		<>
			<Head>
				<title>Marketplace, Parts & E-commerce — Motor Web</title>
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

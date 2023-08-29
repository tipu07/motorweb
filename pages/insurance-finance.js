import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Finance from "./insuranceFinance/finance"
import Benefits from "./insuranceFinance/benefits"
import AudienceTone from "./insuranceFinance/audienceTone"
import BetterDecision from "@/components/betterDecision"

export default function InsuranceFinance() {
	return (
		<>
			<Head>
				<title>Insurance & Finance — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Finance />
			<Benefits />
			<AudienceTone />
			<BetterDecision />
			<Footer />
		</>
	)
}

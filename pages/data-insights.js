import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Insights from "./dataInsights/insights"
import InsightsProcess from "./dataInsights/insightsProcess"
import InsightsPacks from "./dataInsights/insightsPacks"
import InsightsStep from "./dataInsights/insightsStep"
import InsightsPricing from "./dataInsights/insightsPricing"

export default function DataInsights() {
	return (
		<>
			<Head>
				<title>Data Insights — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Insights />
			<InsightsProcess />
			<InsightsPacks />
			<InsightsStep />
			<InsightsPricing />
			<Footer />
		</>
	)
}

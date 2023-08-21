import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Insights from "./dataInsights/insights"
import InsightsProcess from "./dataInsights/insightsProcess"
import InsightsPacks from "./dataInsights/insightsPacks"
import InsightsStep from "./dataInsights/insightsStep"
import InsightsPricing from "./dataInsights/insightsPricing"

const DataInsights = () => {
	return (
		<>
			<Header pageTitle="Data Insights" />
			<Insights />
			<InsightsProcess />
			<InsightsPacks />
			<InsightsStep />
			<InsightsPricing />
			<Footer />
		</>
	)
}

export default DataInsights

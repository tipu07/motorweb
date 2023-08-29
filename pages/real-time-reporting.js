import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import RealTime from "./realTimeReporting/realTime"
import RealTimeAuto from "./realTimeReporting/realTimeAuto"
import RealTimeChart from "./realTimeReporting/realTimeChart"

export default function RealTimeReporting() {
	return (
		<>
			<Head>
				<title>Real Time Reporting / API's — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<RealTime />
			<RealTimeAuto />
			<RealTimeChart />
			<Footer />
		</>
	)
}

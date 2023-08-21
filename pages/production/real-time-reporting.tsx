import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import RealTime from "./realTimeReporting/realTime"
import RealTimeAuto from "./realTimeReporting/realTimeAuto"
import RealTimeChart from "./realTimeReporting/realTimeChart"

const RealTimeReporting = () => {
	return (
		<>
			<Header pageTitle="Real Time Reporting / API's" />
			<RealTime />
			<RealTimeAuto />
			<RealTimeChart />
			<Footer />
		</>
	)
}

export default RealTimeReporting

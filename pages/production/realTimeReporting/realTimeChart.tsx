import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoReportingChart } from "@/components/images"

const RealTimeChart = () => {
	return (
		<>
			<section id={style.real_time_chart}>
				<div className={style.contain}>
					<div className={`${style.wrapper} text-center`}>
						<div className={style.text}>
							<p>Experience the benefits of our API integration for your business today. Contact us to learn more.</p>
						</div>
						<div className={style.image}>
							<Image width={800} height={800} src={PhotoReportingChart} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default RealTimeChart

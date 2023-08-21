import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoInsightsAmino } from "@/components/images"

const InsightsProcess = () => {
	return (
		<>
			<section id={style.insights_process}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<h2>Speed up your processes</h2>
								<p>No need to arrange for MotorWeb to extract the data, simply get the data you want in CSV format, with one simple click.</p>
								<h6>MAKE BETTER DECISIONS</h6>
								<p>Identify trends and make informed decisions with our decision-ready data.</p>
								<p>Access our real-time vehicle data in bulk and stay up-to-date with the latest vehicle information to ensure accuracy, consistency and reliability.</p>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoInsightsAmino} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default InsightsProcess

import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoLeadersInsights } from "@/components/images"

const AudienceTone = () => {
	return (
		<>
			<section id={style.audience_tone}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.content}>
								<h2>MotorWeb Audience and Tone</h2>
								<p>MotorWeb is a business to business, business. We primarily provide products and services to the Finance, Insurance and Motor Vehicle Dealership industries who rely on MotorWeb being the motor vehicle data experts.</p>
								<p>Our services should reflect trust, confidence, expertise, efficiency and ease of use. They minimise clutter and noise and help our customers get the job done.</p>
								<p>Our brand is prominent but not overtly used, we are a supporting actor to the customer&lsquo;s leading role. Where our parent company Trade Me offers relevance (and only in NZ), we areproud of this association.</p>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoLeadersInsights} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AudienceTone

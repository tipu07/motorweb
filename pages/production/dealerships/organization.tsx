import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoMakingRisk } from "@/components/images"
import Image from "next/image"

const Organization = () => {
	return (
		<>
			<section id={style.organization}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoMakingRisk} alt="" />
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.text}>
								<h2>Managing risk is a big and complex task for any organisation.</h2>
								<p>With MotorWeb you can easily streamline processes by leveraging our aggregated data set via a simple API. This can support your risk management policy by:</p>
								<p>
									<strong className={style.text_prime}>Reduce risk and human error:</strong> Auto populating data fields makes it simpler to identify any outstanding issues automatically and up front with the customer, reducing the need to go back and forth to confirm details.
								</p>
								<p>
									<strong className={style.text_prime}>Identify and reduce fraud:</strong> Know everything about the vehicle and make informed decisions when paying out claims. Having the right data to save even just one fraudulent claim will result in significant cost reductions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Organization

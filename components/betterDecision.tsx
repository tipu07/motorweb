import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

const BetterDecision = () => {
	return (
		<>
			<section id={style.better_decision}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h2>Make better decisions</h2>
						<p>Identify trends and make informed decisions with our decision-ready data. Access our real-time vehicle data in bulk and stay up-to-date with the latest vehicle information to ensure accuracy, consistency and reliability.</p>
						<div className={`${style.btn_blk} justify-content-center mt-5`}>
							<Link href="/production/contact" className={`${style.site_btn} ${style.simple}`}>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default BetterDecision

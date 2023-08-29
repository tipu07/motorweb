import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function Insights() {
	return (
		<>
			<section id={style.insights} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Data Insights</h2>
					</div>
					<div className={style.wrapper}>
						<h3>Bulk Data Platform</h3>
						<p>Get the data you need, when you need it, with confidence. Motorweb&lsquo;s latest product allows you to access data quickly and easily, with pre-defined data packs that provide valuable insights to support your analytics and operations.</p>
						<p>Access real-time vehicle data from NEVDIS and stay tuned for upcoming data packs from Vfacts (FCAI) and our valuation partners, such as Glasses with NVIC codes* and Redbook codes*. Stay up-to-date with the latest vehicle information to ensure accurate valuations and underwriting decisions</p>
					</div>
				</div>
			</section>
		</>
	)
}

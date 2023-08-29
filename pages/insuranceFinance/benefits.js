import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function Benefits() {
	return (
		<>
			<section id={style.benefits}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.heading}>
							<h2>Leveraging smart data can drive benefits across your business</h2>
						</div>
						<div className={style.strips}>
							<div className={style.column}>
								<div className={style.inner}>
									<p>Reduce risk by reducing human error and increasing data accuracy.</p>
								</div>
							</div>
							<div className={style.column}>
								<div className={style.inner}>
									<p>Reduce processing time with automatic data population.</p>
								</div>
							</div>
							<div className={style.column}>
								<div className={style.inner}>
									<p>Enhance your digital, call centre and third-party distribution experiences.</p>
								</div>
							</div>
							<div className={style.column}>
								<div className={style.inner}>
									<p>Identify and reduce fraud at quoting and claim time.</p>
								</div>
							</div>
						</div>
					</div>
					<div className={style.blocks}>
						<div className={style.column}>
							<div className={style.inner}>
								<h4>Quoting</h4>
								<p> Accurate and automated data is critical - MotorWeb can directly integrate into your quoting engine to provide the right data in real time.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={`${style.inner} ${style.active}`}>
								<h4>Claims, Total Loss and Fraud Investigation</h4>
								<p>Ensuring you have the most comprehensive and accurate data profile for the vehicles you insure, enables you to create and maintain a risk policy that offsets the risk of the claim.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<h4>Portfolio Enrichment and Lead Generation</h4>
								<p>Integrate vehicle history data to increase sales by identify new business opportunities.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

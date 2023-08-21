import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoInjuryRafiki } from "@/components/images"
import Image from "next/image"

const Finance = () => {
	return (
		<>
			<section id={style.insurance_finance} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Insurance & Finance</h2>
						<p>Our customers demand a simple, instant and seamless way to get a quote for their motor insurance.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoInjuryRafiki} alt="" />
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.text}>
								<p>As the company providing those quotes, you&lsquo;ve already seen the benefits in moving to digital way of doing business and seen the countless hours of productivity benefits.</p>
								<p>With MotorWeb, the benefits don&lsquo;t stop there. Direct integration into your systems is easy – via a simple API, automated checks against our aggregated data sources can also create countless productivity and financial benefits at quotation, policy renewal and claim time, and beyond.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Finance

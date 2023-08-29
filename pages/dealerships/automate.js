import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function Automate() {
	return (
		<>
			<section id={style.automate}>
				<div className={style.contain}>
					<h2 className="mb-5">Automate data processes to increase productivity, and enhance your digital experience.</h2>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.text}>
									<h3>Enhanced digital experience</h3>
									<p>Reduce the information your customers need to provide and your team need to input – autofill important details by using the vehicle plate number.</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={`${style.inner} ${style.active}`}>
								<div className={style.text}>
									<h3>Reduce complexity</h3>
									<p>automated data processes can minimise fraud from manual data entry</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.text}>
									<h3>Reduce processing time</h3>
									<p>Auto populating data not only reduces opportunity for error, but also speeds up time to quote or process claims.</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.txt} fw_500`}>
						<p>By using a simple API, MotorWeb can work with your business to integrate the data into your systems or eCommerce platform.By using a simple API, MotorWeb can work with your business to integrate the data into your systems or eCommerce platform.By using a simple API, MotorWeb can work with your business to integrate the data into your systems or eCommerce platform.</p>
					</div>
				</div>
			</section>
		</>
	)
}

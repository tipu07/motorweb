import React from "react"
import style from "@/styles/scss/web.module.scss"

const Soon = () => {
	return (
		<>
			<section id={style.soon}>
				<div className={style.contain}>
					<div className={`${style.wrapper} text-center`}>
						<div className={style.content}>
							<h2>Coming Soon</h2>
							<h4>
								New product coming soon, <br /> Universal Monitoring Service!
							</h4>
							<p>Stay Ahead of the Curve with MotorWeb&lsquo;s Universal Monitoring Service</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Soon

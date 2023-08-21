import React from "react"
import style from "@/styles/scss/web.module.scss"

const RealTime = () => {
	return (
		<>
			<section id={style.real_time} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Real Time Reporting / API's</h2>
						<p>Motorweb, your trusted source for API solutions in the automotive industry.</p>
					</div>
					<div className={style.wrapper}>
						<p>Our APIs provide access to real-time data on vehicle information, pricing, and registration , sourced from a variety of trusted data providers including NEVDIS and VFacts (FCAI). We work with leading valuation companies such as Glasses and Redbook, and can include NVIC codes or Redbook codes subject to the necessary licences.</p>
						<p>Our APIs are designed to seamlessly integrate with your existing systems, enabling you to streamline your operations and improve your customer experience as well as increase productivity and reduce risk. Stay ahead of the competition with the latest in automotive technology, and contact us today to learn more about our API products.</p>
						<p>
							<strong className={style.text_prime}>Our suite of products available via API includes:</strong>
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default RealTime

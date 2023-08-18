import React from "react"
import style from "@/styles/scss/web.module.scss"
import TestimonialSlider from "@/components/testimonialSlider"

const Feedback = () => {
	return (
		<>
			<section id={style.feedback}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2>Our Customer Feedback</h2>
						<p>Don’t take our word for it. Trust our customers</p>
					</div>
					<TestimonialSlider />
				</div>
			</section>
		</>
	)
}

export default Feedback

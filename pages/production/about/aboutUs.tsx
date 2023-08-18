import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoBuyCarWeb } from "@/components/images"

const AboutUs = () => {
	return (
		<>
			<section id={style.about} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>About us</h2>
						<p>MotorWeb is Australia and New Zealand’s leading vehicle data expert, delivering online services to the motor industry and general public for over 20 years.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoBuyCarWeb} alt="" />
						</div>
						<div className={style.text}>
							<h6 className={style.subheading}>ONE STOP SHOP</h6>
							<h2>We are owned and operated by Trade Me, and are recognised as a one stop shop for the motor vehicle industry</h2>
							<p>We aggregate and analyse over 1000 data points so that you have trusted, reliable and decision ready information, when you need it.</p>
							<p>MotorWeb provides protection and support via simple one-off reports, direct access to our portal or via API integration into your source systems and eCommerce platforms, enabling a more digital experience for your business, your staff and your customers.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutUs

import React from "react"
import style from "@/styles/scss/web.module.scss"
import { CheckCircle, PhotoBusinessDealAmino } from "@/components/images"
import Image from "next/image"

export default function OurPartners() {
	return (
		<>
			<section id={style.partners} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Partners</h2>
						<p>MotorWeb have partnered with businesses to deliver vehicle data solutions for over 20 years.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<p>We&lsquo;ve got a proven track record from working with the motor industry, as well as financial services – in particular insurance.</p>
								<p>And because we&lsquo;ve worked with businesses like yours before:</p>
								<ul>
									<li>
										<Image width={60} height={60} src={CheckCircle} alt="" />
										We understand how your business works.
									</li>
									<li>
										<Image width={60} height={60} src={CheckCircle} alt="" />
										We understand how vehicle data can support your business.
									</li>
									<li>
										<Image width={60} height={60} src={CheckCircle} alt="" />
										We can provide expert advice on how and where data automation can drive productivity in your business.
									</li>
								</ul>
								<h4>Partner with trusted experts</h4>
								<p>But it&lsquo;s not just industry specialisation that sets us apart – by choosing to partner with us, you can be confident you&lsquo;re working with a well-known and trusted organisation, that in turn, only work with other trusted organisations. We partner with, and aggregate our data with the with Austroads NEVDIS and others, so we can provide you with real-time, reliable and decision ready information and valuations.</p>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoBusinessDealAmino} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

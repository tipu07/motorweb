import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CheckCircle, PhotoCarRentalAmino } from "@/components/images"

export default function DealershipsDMS() {
	return (
		<>
			<section id={style.dealerships} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Dealerships and DMS</h2>
						<p>Dealerships across Australia have trusted MotorWeb to get their vehicle data for years – trusted, reliable information, the way you want to use it.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<h2>By leveraging Motorweb&lsquo;s vehicle data for your business, you&lsquo;ll be able to:</h2>
								<ul>
									<li>
										<Image width={60} height={60} src={CheckCircle} alt="" />
										Easily identify the vehicle, their parts and corresponding Glasses NVIC or Redbook code
									</li>
									<li>
										<Image width={60} height={60} src={CheckCircle} alt="" />
										Get instant access to vehicle information and any associated or outstanding issues (e.g., WOVR or stolen)
									</li>
									<li>
										<Image width={60} height={60} src={CheckCircle} alt="" />
										Gain access to all vehicle details held in NEVDIS from multiple data source, along with manufacturer information, registration details, WOVR history and stolen jurisdiction information.
									</li>
								</ul>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoCarRentalAmino} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

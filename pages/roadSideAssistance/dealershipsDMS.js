import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoDeviceInject } from "@/components/images"

export default function DealershipsDMS() {
	return (
		<>
			<section id={style.dealerships} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Road Side Assistance, Parking & Government</h2>
						<p>MotorWeb works with a variety of government and non government traffic management organisations.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<p>Whether you are in the parking sector, toll operations or general traffic management, Motorweb offers a variety of different products that can be easily integrated with LPR cameras to provide accurate vehicle data, assist with enforcement or improve your customers onboarding experience.</p>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoDeviceInject} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

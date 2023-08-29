import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoCharacterInject } from "@/components/images"

export default function DealershipsDMS() {
	return (
		<>
			<section id={style.dealerships} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Marketplace, Parts & E-commerce</h2>
						<p>However your business uses vehicle data, MotorWeb can help to streamline and simplify your processes.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<p>Take the pain out of vehicle selection with a simple registration plate match to the motor vehicle, removing the ambiguity between make, model, series and other vehicle characteristics.</p>
								<p>Motorweb can integrate directly into your source systems and eCommerce platforms, driving accuracy and enhancing your digital, call centre and in-store experiences.</p>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoCharacterInject} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

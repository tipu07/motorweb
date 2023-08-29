import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoBeneficiosExcel } from "@/components/images"
import Image from "next/image"

export default function OurProducts() {
	return (
		<>
			<section id={style.products} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Products</h2>
						<p>MotorWeb is Australia and New Zealand&lsquo;s leading vehicle data expert, delivering online services to the motor industry and general public for over 20 years.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoBeneficiosExcel} alt="" />
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.text}>
								<h6 className={style.subheading}>REAL TIME REPORTING - API&lsquo;S</h6>
								<h2>Real Time Reporting – API&lsquo;s</h2>
								<p>We aggregate and analyse over 1000 data points so that you have trusted, reliable and decision ready information, when you need it.</p>
								<p>MotorWeb provides protection and support via simple one-off reports, direct access to our portal or via API integration into your source systems and eCommerce platforms, enabling a more digital experience for your business, your staff and your customers.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

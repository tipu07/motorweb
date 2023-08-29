import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoEcoSystem } from "@/components/images"

export default function AboutWorks() {
	return (
		<>
			<section id={style.about_works}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h6 className={style.subheading}>TRUSTED AWARD</h6>
						<h2>Work With Us</h2>
						<p>We’re growing, and always eager to meet people and businesses who are passionate about what you do, and are curious to learn more. Keen to work with an awesome team? We’d love to hear from you.</p>
					</div>
					<div className={style.image}>
						<Image src={PhotoEcoSystem} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}

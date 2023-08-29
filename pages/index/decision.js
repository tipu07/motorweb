import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoMainBanner } from "@/components/images"

export default function Decision() {
	return (
		<>
			<section id={style.decision}>
				<div className={style.contain}>
					<div className={style.image}>
						<Image width={1000} height={800} src={PhotoMainBanner} alt="" />
					</div>
					<div className={`${style.content} text-center`}>
						<h2>Make better decisions</h2>
						<p>
							Identify trends and make informed decisions with our decision-ready data. <br /> Access our real-time vehicle data in bulk and stay up-to-date with the latest vehicle information to ensure accuracy, consistency and reliability.
						</p>
						<div className={`${style.btn_blk} justify-content-center`}>
							<Link href="/contact" className={style.site_btn}>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

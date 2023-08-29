import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoIntro_01 } from "@/components/images"

export default function Banner() {
	return (
		<>
			<section id={style.banner}>
				<div className={style.contain}>
					<div className={style.content}>
						<h1>YOUR LEADING VEHICLE DATA EXPERT</h1>
						<p>Get the data, how you need it – real time, reliable and decision ready.</p>
					</div>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<h2>Our vehicle specifications API service is all that you need</h2>
								<p>Automate data processes, and enable your business to drive a better customer, staff and digital experience – and all while supporting risk and fraud management, and compliance.</p>
								<p>Get the data you need, when you need it, with confidence. Motorweb&lsquo;s latest product allows you to access data quickly and easily, with pre-defined data packs that provide valuable insights to support your analytics and operations.</p>
								<div className={style.btn_blk}>
									<Link href="/about" className={style.site_btn}>
										Read More
									</Link>
								</div>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={1400} height={1000} src={PhotoIntro_01} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

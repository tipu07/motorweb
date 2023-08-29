import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { IconCheckSquare, PhotoIntro_02, PhotoIntro_03, PlayIcon } from "@/components/images"

export default function Introduction() {
	return (
		<>
			<section id={style.introduction}>
				<div className={style.block}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.content}>
									<h2>
										MotorWeb have <strong>partnered</strong> with businesses to deliver vehicle <strong>data solutions</strong> for over 20 years
									</h2>
									<ul className={style.list}>
										<li>
											<Image width={40} height={40} src={IconCheckSquare} alt="" />
											We understand how your business works.
										</li>
										<li>
											<Image width={40} height={40} src={IconCheckSquare} alt="" />
											We understand how vehicle data can support your business.
										</li>
										<li>
											<Image width={40} height={40} src={IconCheckSquare} alt="" />
											We can provide expert advice on how and where data automation can drive productivity in your business
										</li>
									</ul>
									<div className={style.btn_blk}>
										<Link href="?" className={style.site_btn}>
											Read More
										</Link>
									</div>
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.image}>
									<Image width={1000} height={800} src={PhotoIntro_02} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`${style.block} ${style.what_we_do}`}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.content}>
									<h2>Leverage better data to enhance your digital experience</h2>
									<p>MotorWeb are the vehicle data experts, for whatever your business needs.</p>
									<div className={style.play_btn}>
										<button type="button">
											<Image width={100} height={100} src={PlayIcon} alt="" />
										</button>
										<span>
											Watch full video <br /> to know what we do
										</span>
									</div>
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoIntro_03} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

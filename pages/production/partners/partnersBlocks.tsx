import React from "react"
import style from "@/styles/scss/web.module.scss"
import { CheckCircle, PhotoAuditAmino, PhotoBusinessDealAmino, PhotoCarRentalAmino, PhotoInsuranceAmino, PhotoParkingAmino } from "@/components/images"
import Image from "next/image"
import Link from "next/link"

const PartnersBlocks = () => {
	return (
		<>
			<section id={style.partners_blocks}>
				<div className={style.block}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoInsuranceAmino} alt="" />
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>Insurance & Finance</h2>
									<p> With Motorweb, direct integration into your systems is easy - via a simple API, automated checks against our aggregated data sources can also create countless productivity and financial benefits.</p>
									<div className={`${style.btn_blk} mt-5`}>
										<Link href="?" className={style.site_btn}>
											Read More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoCarRentalAmino} alt="" />
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>Dealerships and DMS</h2>
									<p>Dealerships across Australia have trusted MotorWeb to get their vehicle data for years – trusted, reliable information, the way you want to use it.</p>
									<div className={`${style.btn_blk} mt-5`}>
										<Link href="?" className={style.site_btn}>
											Read More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoAuditAmino} alt="" />
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>Marketplace, Parts & E-commerce</h2>
									<p> However your business uses vehicle data, Motorweb can help to streamline and simplify your processes.</p>
									<div className={`${style.btn_blk} mt-5`}>
										<Link href="?" className={style.site_btn}>
											Read More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoParkingAmino} alt="" />
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>Road Side Assistance, Parking & Government</h2>
									<p>Dealerships across Australia have trusted MotorWeb to get their vehicle data for years – trusted, reliable information, the way you want to use it.</p>
									<div className={`${style.btn_blk} mt-5`}>
										<Link href="?" className={style.site_btn}>
											Read More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default PartnersBlocks

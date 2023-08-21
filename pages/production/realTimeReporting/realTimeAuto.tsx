import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoReportingAutoDescription, PhotoReportingAutoId, PhotoReportingAutoPlus, PhotoReportingAutoReport, SearchIcon } from "@/components/images"
import Image from "next/image"

const RealTimeAuto = () => {
	return (
		<>
			<section id={style.real_time_auto}>
				<div className={style.blocks}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoReportingAutoDescription} alt="" />
								</div>
								<div className={style.form_wrapper}>
									<p>For a sample of Auto Description enter your Rego and State below</p>
									<form action="" method="post" className={style.query_form}>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Vehicle registration number" />
										</div>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Enter State" />
										</div>
										<button type="submit">
											<Image width={60} height={60} src={SearchIcon} alt="" />
										</button>
									</form>
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>Auto Description</h2>
									<p>Looking for a reliable and accurate vehicle data API for your ecommerce platform? Look no further than Auto Description, one of Australia&lsquo;s top APIs powered by Vfacts (FCAI) data. With direct access to OEM data sources, Auto Description provides detailed and consistent vehicle descriptions, including make, model, series, and transmission type.</p>
									<p>Whether you&lsquo;re a dealer or a software provider, our API is the perfect solution for integrating high-quality vehicle data into your online sales channels. With Auto Description, you can improve the accuracy and consistency of your vehicle descriptions, streamline your operations, and enhance your customer experience</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.blocks}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoReportingAutoId} alt="" />
								</div>
								<div className={style.form_wrapper}>
									<p>For a sample of Auto ID enter your Rego and State below</p>
									<form action="" method="post" className={style.query_form}>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Vehicle registration number" />
										</div>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Enter State" />
										</div>
										<button type="submit">
											<Image width={60} height={60} src={SearchIcon} alt="" />
										</button>
									</form>
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>Auto-ID</h2>
									<p>Our Auto-ID product is specifically designed for easy identification of a vehicle and its corresponding Glasses NVIC code. Perfect for deployment in sales environments such as call centres, websites, and integration into existing business systems, Auto-ID simplifies the vehicle identification process, allowing your team to focus on closing deals and providing better customer service.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.blocks}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoReportingAutoReport} alt="" />
								</div>
								<div className={style.form_wrapper}>
									<p>For a sample of Auto Report enter your Rego and State below</p>
									<form action="" method="post" className={style.query_form}>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Vehicle registration number" />
										</div>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Enter State" />
										</div>
										<button type="submit">
											<Image width={60} height={60} src={SearchIcon} alt="" />
										</button>
									</form>
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>AutoReport</h2>
									<p>Our AutoReport product is designed to provide comprehensive vehicle details and risk factor identification. It alerts you to serious issues such as WOVR and stolen vehicles, while also providing details such as registration expiry date, VIN, and engine number. With instant access to key vehicle information and issues, AutoReport enables greater business intelligence when it comes to vehicle sales, claims, and all other operational areas of your business.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.blocks}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<div className={`${style.column} ${style.column1}`}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoReportingAutoPlus} alt="" />
								</div>
								<div className={style.form_wrapper}>
									<p>For a sample of Auto Report Plus enter your Rego and State below</p>
									<form action="" method="post" className={style.query_form}>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Vehicle registration number" />
										</div>
										<div className={style.form_blk}>
											<input type="text" name="" id="" className={style.input} placeholder="Enter State" />
										</div>
										<button type="submit">
											<Image width={60} height={60} src={SearchIcon} alt="" />
										</button>
									</form>
								</div>
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<div className={style.text}>
									<h2>AutoReport-PLUS</h2>
									<p>For our most comprehensive vehicle query available in Australia, look no further than AutoReport-PLUS. This product incorporates all vehicle details held on NEVDIS from various Road Transport Authorities, along with manufacturer generation/grade information, engine details, registration expiry, vehicle identifiers, WOVR history, and stolen jurisdiction information.</p>
									<p>Designed for maximum information on any registered vehicle, AutoReport-PLUS is perfect for use in claims, investigations, and assessing total loss applications. With AutoReport-PLUS, you can have confidence in your data and make informed decisions with ease.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default RealTimeAuto

import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function ProductsTextual() {
	return (
		<>
			<section id={style.products_textual}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<p>Looking for a reliable and accurate vehicle data API for your ecommerce platform? Look no further than Auto Description, one of Australia&lsquo;s top APIs powered by Vfacts (FCAI) data. With direct access to OEM data sources, Auto Description provides detailed and consistent vehicle descriptions, including make, model, series, and transmission type.</p>
						<p>Whether you&lsquo;re a dealer or a software provider, our API is the perfect solution for integrating high-quality vehicle data into your online sales channels. With Auto Description, you can improve the accuracy and consistency of your vehicle descriptions, streamline your operations, and enhance your customer experience</p>
						<div className={`${style.btn_blk} mt-5 justify-content-center`}>
							<Link href="?" className={style.site_btn}>
								Read More
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

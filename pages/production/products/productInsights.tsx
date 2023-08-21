import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoInsightsAmino } from "@/components/images"
import Image from "next/image"
import Link from "next/link"

const ProductInsights = () => {
	return (
		<>
			<section id={style.products_insights}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<h6 className={style.subheading}>DATA ANALYTICS</h6>
								<h2>Data Insights</h2>
								<p>Get the data you need, when you need it, with confidence. Motorweb’s latest product allows you to access data quickly and easily, with pre-defined data packs that provide valuable insights to support your analytics and operations.</p>
								<div className={style.btn_blk}>
									<Link href="?" className={style.site_btn}>
										Read More
									</Link>
								</div>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.image}>
								<Image width={800} height={800} src={PhotoInsightsAmino} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductInsights

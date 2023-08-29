import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function InsightsPricing() {
	return (
		<>
			<section id={style.insights_pricing}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={`${style.column} ${style.column1}`}>
							<div className={style.text}>
								<h2>Transparent Pricing Model</h2>
								<p>Our pricing rates are based on a per-transaction basis, which decreases as your volume increases. We offer six different discount tiers based on your transaction volume, allowing you to save more as you process more transactions. Our transparent pricing model ensures that you always know what you&lsquo;re paying for.</p>
								<p>
									<strong className={style.text_prime}>Contact us</strong> today to learn more about our pricing structure and how we can help you save on transaction processing costs.
								</p>
							</div>
						</div>
						<div className={`${style.column} ${style.column2}`}>
							<div className={style.price_tbl}>
								<div className={style.title}>Discount Tiers</div>
								<table>
									<tbody>
										<tr>
											<td>Tier 1</td>
											<td>100 – 10,000</td>
										</tr>
										<tr>
											<td>Tier 2</td>
											<td>10,001 – 50,000</td>
										</tr>
										<tr>
											<td>Tier 3</td>
											<td>50,001 – 200,000</td>
										</tr>
										<tr>
											<td>Tier 4</td>
											<td>200,001 – 500,000</td>
										</tr>
										<tr>
											<td>Tier 5</td>
											<td>500,001 – 1,000,000</td>
										</tr>
										<tr>
											<td>Tier 6</td>
											<td>1,000,001+</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

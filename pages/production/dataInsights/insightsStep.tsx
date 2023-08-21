import React from "react"
import style from "@/styles/scss/web.module.scss"

const InsightsStep = () => {
	return (
		<>
			<section id={style.insights_step}>
				<div className={style.contain}>
					<h3 className="text-center">Examples of how you can use Bulk Data Platform</h3>
					<div className={style.wrapper}>
						<div className={style.block}>
							<h6 className={style.text_prime}>Use case 1</h6>
							<h4>Insurance Industry</h4>
							<p>Accurately Match Vehicles to Valuation Codes and Improve Pricing Precision</p>
						</div>
						<div className={style.outer}>
							<div className={style.inner}>
								<h4>Benefit</h4>
								<p>The report ensures that the vehicle is accurately matched to a Glass&lsquo;s NVIC or Redbook code, which helps improve underwriting precision and enables more precise customer renewal offer pricing. This allows you to provide more accurate and competitive quotes to your customers.</p>
							</div>
							<div className={style.inner}>
								<h4>Scenario</h4>
								<p>When customers choose their vehicles from a &lsquo;drop-down box&lsquo; rather than using MotorWeb&lsquo;s plate search at the time of quote, there may be discrepancies in the vehicle&lsquo;s characteristics. Generate a Bulk Data Platform Report to identify these policy types and vehicle selection exceptions.</p>
							</div>
						</div>
						<div className={style.block}>
							<h6 className={style.text_prime}>Use case 2</h6>
							<h4>Dealerships</h4>
							<p>New Business Acquisition and Cross-sell</p>
						</div>
						<div className={style.outer}>
							<div className={style.inner}>
								<h4>Benefit</h4>
								<p>By using the registration expiry information provided by the Bulk Data Platform report, you can create targeted marketing campaigns to reach potential customers at the right time. By presenting the MotorWeb enriched vehicle description on your offer collateral, you can build trust with your prospects and increase the likelihood of converting them into customers. This can ultimately result in more business opportunities and increased revenue for your company.</p>
							</div>
							<div className={style.inner}>
								<h4>Scenario</h4>
								<p>With our Bulk Data Platform, you can generate a report that provides the registration expiry day and month of a vehicle. This information can be invaluable for marketing to targeted audiences ahead of the registration expiry date to assist with new business acquisition and cross-selling efforts.</p>
							</div>
						</div>
						<div className={style.block}>
							<h6 className={style.text_prime}>Use case 3</h6>
							<h4>Fleet</h4>
							<p>Understand Your Vehicle Fleet Environmental Impacts in Retrospect – Fleets</p>
						</div>
						<div className={style.outer}>
							<div className={style.inner}>
								<h4>Benefit</h4>
								<p>By having access to this information through the Bulk Data Platform report, you can support socially responsible investment and regulatory (PCAF) reporting requirements. Additionally, you can use this information as an opportunity to raise awareness as a publication to your customer base, showcasing your commitment to sustainability and environmentally responsible business practices. This can ultimately improve your brand image and reputation, leading to increased customer loyalty and potential new business opportunities.</p>
							</div>
							<div className={style.inner}>
								<h4>Scenario</h4>
								<p>With our Bulk Data Platform, you can generate a report that provides insights into your vehicle fleet&lsquo;s CO2 emissions, fuel, and energy consumption. This report can support your understanding of your fleet&lsquo;s environmental impacts.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default InsightsStep

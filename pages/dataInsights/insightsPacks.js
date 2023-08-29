import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CheckCircle } from "@/components/images"

export default function InsightsPacks() {
	return (
		<>
			<section id={style.insights_packs}>
				<div className={style.contain}>
					<h2>Our current NEVDIS data packs include:</h2>
					<ul className={style.list}>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								Detailed Vehicle Data
							</div>
							<div className={style.txt}>
								<p>Make, Make description, Model, Model Description, Primary Colour, Body Type, Vehicle Type, Engine# where available.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								HPV
							</div>
							<div className={style.txt}>
								<p>Power, Weight, Power-to-Weight Ratio.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								Stolen Information
							</div>
							<div className={style.txt}>
								<p>Stolen Component, Police Jurisdiction, Police Reference Number, Reported Date.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								Registration Status
							</div>
							<div className={style.txt}>
								<p>Status, Expiry Date.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								Vehicle Age
							</div>
							<div className={style.txt}>
								<p>Year of Manufacture, Compliance Plate.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								Vehicle Age & Registration Status
							</div>
							<div className={style.txt}>
								<p>Year of Manufacture, Compliance Plate, Registration Status & Expiry Date.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								Vehicle Age & Detailed Vehicle Data
							</div>
							<div className={style.txt}>
								<p>Year of Manufacture, Compliance Plate, Make, Make description, Model, Model Description, Primary Colour, Body Type, Vehicle Type, Engine# where available.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								VIN Decode
							</div>
							<div className={style.txt}>
								<p>VIN Decode.</p>
							</div>
						</li>
						<li>
							<div className={style.title}>
								<Image width={60} height={60} src={CheckCircle} alt="" />
								WOV & WOV
							</div>
							<div className={style.txt}>
								<p>History, WOV Damage Codes & WOV Damage Codes History, Type Code, Jurisdiction, Incident Record Date, Incident Code, Current and Historical Damage Codes.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

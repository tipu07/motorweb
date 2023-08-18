import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import AboutUs from "./about/aboutUs"
import AboutWorks from "./about/aboutWorks"
import BetterDecision from "@/components/betterDecision"

const About = () => {
	return (
		<>
			<Header pageTitle="About us" />
			<AboutUs />
			<AboutWorks />
			<BetterDecision />
			<Footer />
		</>
	)
}

export default About

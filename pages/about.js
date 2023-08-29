import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import AboutUs from "./about/aboutUs"
import AboutWorks from "./about/aboutWorks"
import BetterDecision from "@/components/betterDecision"

export default function About() {
	return (
		<>
			<Head>
				<title>About us — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<AboutUs />
			<AboutWorks />
			<BetterDecision />
			<Footer />
		</>
	)
}

import React from "react"
import Head from "next/head"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Footer from "@/components/footer"
import Introduction from "./index/introduction"
import Decision from "./index/decision"
import Feedback from "./index/feedback"

export default function Index() {
	return (
		<>
			<Head>
				<title>Home — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Banner />
			<Introduction />
			<Decision />
			<Feedback />
			<Footer />
		</>
	)
}

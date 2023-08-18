import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Footer from "@/components/footer"
import Introduction from "./index/introduction"
import Decision from "./index/decision"
import Feedback from "./index/feedback"

const Index = () => {
	return (
		<>
			<Header pageTitle="Home" />
			<Banner />
			<Introduction />
			<Decision />
			<Feedback />
			<Footer />
		</>
	)
}

export default Index

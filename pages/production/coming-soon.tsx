import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Soon from "./comingSoon/soon"

const ComingSoon = () => {
	return (
		<>
			<Header pageTitle="Coming Soon" />
			<Soon />
			<Footer />
		</>
	)
}

export default ComingSoon

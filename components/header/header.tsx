import Head from "next/head"
import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Navigation from "./navigation"
import Logo from "../logo"
import HeaderStrip from "./headerStrip"

const Header = (props: any) => {
	const { pageTitle } = props
	const [navActive, setNavActive] = useState(false)
	const navToggleHandle = () => {
		setNavActive(!navActive)
	}

	return (
		<>
			<Head>
				<title>{pageTitle} — Motor Web</title>
				<meta name="description" content="Motor Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<header id={style.header}>
				<div className={style.contain}>
					<Logo />
					<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={navToggleHandle}>
						<span></span>
					</button>
					<Navigation navActive={navActive} />
				</div>
			</header>
		</>
	)
}

export default Header

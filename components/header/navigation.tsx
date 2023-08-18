import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"

const Navigation = (props: any) => {
	const { navActive } = props
	const router = useRouter()
	return (
		<>
			<nav id={style.nav}>
				<ul id={style.nav_list} className={`${navActive ? style.active : ""}`}>
					<li className={style.drop}>
						<Link href="/production/partners" className={router.pathname === "/production/partners" ? style.active : ""}>
							Partners
						</Link>
					</li>
					<li className={style.drop}>
						<Link href="/production/products" className={router.pathname === "/production/products" ? style.active : ""}>
							Products
						</Link>
					</li>
					<li>
						<Link href="/production/about" className={router.pathname === "/production/about" ? style.active : ""}>
							About Us
						</Link>
					</li>
					<li>
						<Link href="/production/contact" className={`${style.site_btn} ${style.sm} ${style.stroke}`}>
							Contact us
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation

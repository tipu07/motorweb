import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"

export default function Navigation(props) {
	const { navActive } = props
	const router = useRouter()
	return (
		<>
			<nav id={style.nav}>
				<ul id={style.nav_list} className={`${navActive ? style.active : ""}`}>
					<li className={style.drop}>
						<Link href="/partners" className={router.pathname === "/partners" ? style.active : ""}>
							Partners
						</Link>
					</li>
					<li className={style.drop}>
						<Link href="/products" className={router.pathname === "/products" ? style.active : ""}>
							Products
						</Link>
					</li>
					<li>
						<Link href="/about" className={router.pathname === "/about" ? style.active : ""}>
							About Us
						</Link>
					</li>
					<li>
						<Link href="/contact" className={`${style.site_btn} ${style.sm} ${style.stroke}`}>
							Contact us
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

import "@/styles/css/bootstrap.min.css"
import "@/styles/css/slick.min.css"
import "@/styles/scss/web.generic.scss"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

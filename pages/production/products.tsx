import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import OurProducts from "./products/ourProducts"
import ProductsTextual from "./products/productsTextual"
import BetterDecision from "@/components/betterDecision"
import ProductInsights from "./products/productInsights"

const Products = () => {
	return (
		<>
			<Header pageTitle="Products" />
			<OurProducts />
			<ProductsTextual />
			<BetterDecision />
			<ProductInsights />
			<Footer />
		</>
	)
}

export default Products

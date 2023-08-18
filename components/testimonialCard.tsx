import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"

const TestimonialCard = (props: any) => {
	const { text, name, image } = props

	return (
		<>
			<div className={style.folio_blk}>
				<div className={style.ico_blk}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={image} alt="" />
					</div>
					<div className={style.name}>{name}</div>
				</div>
				<div className={style.txt_blk}>
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

export default TestimonialCard

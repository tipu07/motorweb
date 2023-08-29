import React from "react"
import style from "@/styles/scss/web.module.scss"
import Slider from "react-slick"
import TestimonialCard from "./testimonialCard"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04 } from "./images"

const TESTIMONIALS = [
	{
		id: 1,
		name: "Jennifer Kem",
		designation: "Business women",
		text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
		image: PhotoUser_01,
	},
	{
		id: 2,
		name: "Brent Phillips",
		designation: "Businessmen",
		text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
		image: PhotoUser_02,
	},
	{
		id: 3,
		name: "Samentha John",
		designation: "Business women",
		text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
		image: PhotoUser_03,
	},
	{
		id: 1,
		name: "Stephan Hawking",
		designation: "Businessmen",
		text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
		image: PhotoUser_04,
	},
]

export default function TestimonialSlider() {
	var settings = {
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<>
			<Slider {...settings} className={`${style.slick_testimonial} slick-testimonial slick-carousel`}>
				{TESTIMONIALS.map((data) => {
					return <TestimonialCard {...data} key={data.id} />
				})}
			</Slider>
		</>
	)
}

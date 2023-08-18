import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEnvelope, IconPhone, SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter } from "@/components/images"

const ContactUs = () => {
	return (
		<>
			<section id={style.contact} className={style.section_bg}>
				<div className={style.contain}>
					<div className={style.section_content}>
						<h2>Contact Us</h2>
						<p>If you need to help with our services, have questions about our work or experiencing any technical difficulties, please do not hesitate to contact us.</p>
					</div>
					<div className={style.wrapper}>
						<h3 className="mb-4">Please fill these fields</h3>
						<div className={`${style.main_row} row`}>
							<div className={style.column}>
								<form action="" method="post">
									<div className="row form_row">
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<input type="text" name="" id="" className={style.input} placeholder="First Name *" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<input type="text" name="" id="" className={style.input} placeholder="Last Name *" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<input type="text" name="" id="" className={style.input} placeholder="Email Address *" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<input type="text" name="" id="" className={style.input} placeholder="Business Name *" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<input type="text" name="" id="" className={style.input} placeholder="Phone Number" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className={style.form_blk}>
												<select name="" id="" className={style.input}>
													<option value="">Preferred contact method</option>
													<option value="">By Email</option>
													<option value="">By Phone</option>
												</select>
											</div>
										</div>
										<div className="col-sm-12">
											<div className={style.form_blk}>
												<textarea name="" id="" rows={5} className={style.input} placeholder="Describe Industry/Profession *"></textarea>
											</div>
										</div>
									</div>
									<div className={`${style.btn_blk} mt-5`}>
										<button type="submit" className={style.site_btn}>
											Submit
										</button>
									</div>
								</form>
							</div>
							<div className={style.column}>
								<div className={style.text}>
									<h3>We’d love to hear from you</h3>
									<p>If you need to help with our services, have questions about our work or experiencing any technical difficulties, please do not hesitate to contact us.</p>
									<ul className={style.info_list}>
										<li>
											<Image width={100} height={100} src={IconPhone} alt="" />
											<a href="tel:413-248-8118">413-248-8118</a>
										</li>
										<li>
											<Image width={100} height={100} src={IconEnvelope} alt="" />
											<a href="mailto:Info@motorweb.com">Info@motorweb.com</a>
										</li>
									</ul>
									<h5>Follow Us On</h5>
									<ul className={style.social_list}>
										<li>
											<a href="?" target="_blank">
												<Image width={100} height={100} src={SocialTwitter} alt="" />
											</a>
										</li>
										<li>
											<a href="?" target="_blank">
												<Image width={100} height={100} src={SocialFacebook} alt="" />
											</a>
										</li>
										<li>
											<a href="?" target="_blank">
												<Image width={100} height={100} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" target="_blank">
												<Image width={100} height={100} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ContactUs

import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Testimonial4 = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
	<>
	<section className="testimonial-section-home4">
    <div className="auto-container">
      <div className="sec-title light text-center">
        <h2>Feedback From Clients</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="testimonials">
					<Swiper
					spaceBetween={10}
					slidesPerView={1}
					loop={true}
					thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="testimonial-slider-home4">
					<SwiperSlide>
						<div className="testimonial-block-home4">
							<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
								<div className="text">From the moment I stepped into the serene ambiance of the spa, I knew I was in for a treat. The staff greeted me with warm smiles and a calming herbal tea that set the tone for what was to be an incredibly rejuvenating experience</div>
								<h5 className="name">Jenny Wilson</h5>
								<span className="designation">Business Owner</span>
							</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-home4">
							<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
								<div className="text">From the moment I stepped into the serene ambiance of the spa, I knew I was in for a treat. The staff greeted me with warm smiles and a calming herbal tea that set the tone for what was to be an incredibly rejuvenating experience</div>
								<h5 className="name">Jenny Wilson</h5>
								<span className="designation">Business Owner</span>
							</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-home4">
							<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
								<div className="text">From the moment I stepped into the serene ambiance of the spa, I knew I was in for a treat. The staff greeted me with warm smiles and a calming herbal tea that set the tone for what was to be an incredibly rejuvenating experience</div>
								<h5 className="name">Jenny Wilson</h5>
								<span className="designation">Business Owner</span>
							</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-home4">
							<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
								<div className="text">From the moment I stepped into the serene ambiance of the spa, I knew I was in for a treat. The staff greeted me with warm smiles and a calming herbal tea that set the tone for what was to be an incredibly rejuvenating experience</div>
								<h5 className="name">Jenny Wilson</h5>
								<span className="designation">Business Owner</span>
							</div>
							</div>
						</div>
					</SwiperSlide>
					</Swiper>
					<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					autoPlay={1500}
					slidesPerView={3}
					freeMode={true}
					loop={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="testimonial-thumbs">
					<SwiperSlide className="swiper-slide">
						<img className="rounded-circle" src="images/resource/testi-thumb1-home4.jpg" alt=""/>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<img className="rounded-circle" src="images/resource/testi-thumb1-home4.jpg" alt=""/>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<img className="rounded-circle" src="images/resource/testi-thumb1-home4.jpg" alt=""/>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<img className="rounded-circle" src="images/resource/testi-4.jpg" alt=""/>
					</SwiperSlide>
					</Swiper>
			</div>
		</div>
		</div>
		</div>
	</section>
	</>
	);
};
export default Testimonial4

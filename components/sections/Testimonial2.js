import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
  pagination: true,
	autoplay: {
		delay: 25000,
		disableOnInteraction: false,
	},
	loop: true
};
const Testimonial2 = () => {
	return (
	<>
    <section className="testimonial-section testimonial-style-two">
      <div className="instagram1-7 bounce-x"></div>
      <div className="testimonial-pattrn1-2 bounce-y"></div>
		  <div className="auto-container">
			<div className="sec-title text-center">
				<figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
				<span className="sub-title">Testimonial</span>
				<h2 className="words-slide-up text-split">What they say?</h2>
			</div>
        <div className="carousel-outer col-lg-8 offset-lg-2">
            <Swiper {...swiperOptions} className="testimonial-carousel-three owl-carousel owl-theme default-dots">
              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                    <div className="inner-box text-center">
                        <div className="rating">
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        </div>
                        <div className="text">“  Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus ”</div>
                        <div className="info-box">
                        <h4 className="name">Robert Fox -</h4>
                        <span className="designation">Co Founder</span>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                    <div className="inner-box text-center">
                        <div className="rating">
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        <i className="icon fa fa-star"></i>
                        </div>
                        <div className="text">“  Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus ”</div>
                        <div className="info-box">
                        <h4 className="name">Robert Fox -</h4>
                        <span className="designation">Co Founder</span>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
	</>
	);
};
export default Testimonial2

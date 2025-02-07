
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
	}
};
const Testimonial3 = () => {
    return (
        <>
        <section className="testimonial-section-three pt-120 pb-90">
          <div className="image-1 bounce-y"><img src="images/resource/testimonial-pattrn1-2.png" alt=""/></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Testimonial</span>
              <h2 className="words-slide-up text-split">What they say?</h2>
            </div>
            <div className="carousel-outer col-lg-12">
            <Swiper {...swiperOptions} className="testimonial-carousel-two owl-carousel owl-theme">
              <SwiperSlide className="slide-item">
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <img className="img-1 bounce-y" src="images/resource/testi-pattern-1.png" alt=""/>
                    <img className="img-2 bounce-x" src="images/resource/testi-leaf-1.png" alt=""/>
                    <span className="icon bounce-y fa fa-quote-right"></span>
                    <figure className="thumb">
                      <img src="images/resource/testi-3.jpg" alt=""/>
                    </figure>
                    <div className="info-box">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text">Our beauty salon offers a wide range of services to cater to your beauty needs from head to toe. Treat your tresses to a stylish haircut, colour, or timeline highlights that perfectly complement your features Rejuvenate your skin customized facials.</div>
                      <h4 className="name">Angelina Margret</h4>
                      <span className="designation">Customer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide className="slide-item">
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <img className="img-1 bounce-y" src="images/resource/testi-pattern-1.png" alt=""/>
                    <img className="img-2 bounce-x" src="images/resource/testi-leaf-1.png" alt=""/>
                    <span className="icon bounce-y fa fa-quote-right"></span>
                    <figure className="thumb">
                      <img src="images/resource/testi-4.jpg" alt=""/>
                    </figure>
                    <div className="info-box">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text">Our beauty salon offers a wide range of services to cater to your beauty needs from head to toe. Treat your tresses to a stylish haircut, colour, or timeline highlights that perfectly complement your features Rejuvenate your skin customized facials.</div>
                      <h4 className="name">Angelina Margret</h4>
                      <span className="designation">Customer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slide-item">
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <img className="img-1 bounce-y" src="images/resource/testi-pattern-1.png" alt=""/>
                    <img className="img-2 bounce-x" src="images/resource/testi-leaf-1.png" alt=""/>
                    <span className="icon bounce-y fa fa-quote-right"></span>
                    <figure className="thumb">
                      <img src="images/resource/testi-3.jpg" alt=""/>
                    </figure>
                    <div className="info-box">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text">Our beauty salon offers a wide range of services to cater to your beauty needs from head to toe. Treat your tresses to a stylish haircut, colour, or timeline highlights that perfectly complement your features Rejuvenate your skin customized facials.</div>
                      <h4 className="name">Angelina Margret</h4>
                      <span className="designation">Customer</span>
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
export default Testimonial3
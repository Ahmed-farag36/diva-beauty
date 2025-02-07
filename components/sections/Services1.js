import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation, Scrollbar],
	slidesPerView: 4,
	spaceBetween: 30,
    scrollbar:{ draggable: true, dragSize: 24 },
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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
};
const Services1 = () => {
    return (
        <>
        <section className="services-section pt-0">
        <div className="service1-pattrn1 bounce-y"></div>
          <div className="auto-container">
                <div className="outer-box">
            <div className="sec-title">
              <div className="row">
                <div className="col-xl-6">
                  <figure className="image"><img src="/images/icons/icon1.png" alt="Image"/></figure>
                  <span className="sub-title">Services list</span>
                  <h2 className="words-slide-up text-split">Our Services Will Make You Glow</h2>
                </div>
                <div className="col-xl-5 offset-xl-1">
                  <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec.</div>
                </div>
              </div>
            </div>
                <Swiper {...swiperOptions} className="service-carousel owl-carousel owl-theme default-dots pb-0">
                    <SwiperSlide>
							<div className="swiper-slide">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service1-1.png)' }}></div>
                      <div className="bg-image-two" style={{ backgroundImage: 'url(/images/resource/service1-2.png)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="/images/icons/theme-icon5.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Sauna Relax</Link></h4>
                    </div>
                  </div>
                </div>
							</div>
                    </SwiperSlide>
                    <SwiperSlide>
							<div className="swiper-slide">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service1-1.png)' }}></div>
                      <div className="bg-image-two" style={{ backgroundImage: 'url(/images/resource/service1-2.png)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="/images/icons/theme-icon6.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Face Treatments</Link></h4>
                    </div>
                  </div>
                </div>
							</div>
                    </SwiperSlide>
                    <SwiperSlide>
							<div className="swiper-slide">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service1-1.png)' }}></div>
                      <div className="bg-image-two" style={{ backgroundImage: 'url(/images/resource/service1-2.png)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="/images/icons/theme-icon7.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Make-up</Link></h4>
                    </div>
                  </div>
                </div>
							</div>
                    </SwiperSlide>
                    <SwiperSlide>
							<div className="swiper-slide">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service1-1.png)' }}></div>
                      <div className="bg-image-two" style={{ backgroundImage: 'url(/images/resource/service1-2.png)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="/images/icons/theme-icon8.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Thai Massage</Link></h4>
                    </div>
                  </div>
                </div>
							</div>
                    </SwiperSlide>
                    <SwiperSlide>
							<div className="swiper-slide">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service1-1.png)' }}></div>
                      <div className="bg-image-two" style={{ backgroundImage: 'url(/images/resource/service1-2.png)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="/images/icons/theme-icon5.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Sauna Relax</Link></h4>
                    </div>
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
export default Services1

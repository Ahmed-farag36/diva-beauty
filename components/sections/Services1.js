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

const Services1 = ({ data }) => {
    const { services } = data;
    
    return (
        <>
        <section className="services-section pt-0">
        <div className="service1-pattrn1 bounce-y"></div>
          <div className="auto-container">
                <div className="outer-box">
            <div className="sec-title">
              <div className="row">
                <div className="col-xl-6">
                  <figure className="image">
                    <img src={services.header.icon} alt="Service Icon"/>
                  </figure>
                  <span className="sub-title">{services.header.subTitle}</span>
                  <h2 className="words-slide-up text-split">{services.header.title}</h2>
                </div>
                <div className="col-xl-5 offset-xl-1">
                  <div className="text">{services.header.description}</div>
                </div>
              </div>
            </div>
                <Swiper {...swiperOptions} className="service-carousel owl-carousel owl-theme default-dots pb-0">
                    {services.items.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide">
                                <div className="service-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="bg-image" style={{ backgroundImage: `url(${service.bgImage1})` }}></div>
                                            <div className="bg-image-two" style={{ backgroundImage: `url(${service.bgImage2})` }}></div>
                                        </div>
                                        <div className="content-box">
                                            <figure className="icon mb-0">
                                                <img src={service.icon} alt={service.title}/>
                                            </figure>
                                            <h4 className="title">
                                                <Link href={service.link}>{service.title}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
          </div>
        </section>

        </>
    );
};
export default Services1

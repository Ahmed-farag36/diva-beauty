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

const Testimonial1 = ({ data, addClass }) => {
	const { testimonial } = data;
	
	return (
	<>
    <section className={`testimonial-section ${addClass}`}>
      <div className="testimonial-pattrn1-1 bounce-y"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <figure className="image">
            <img src={testimonial.header.icon} alt="Icon"/>
          </figure>
          <span className="sub-title">{testimonial.header.subTitle}</span>
          <h2 className="words-slide-up text-split">{testimonial.header.title}</h2>
        </div>
        <div className="carousel-outer col-lg-8 offset-lg-2">
            <Swiper {...swiperOptions} className="testimonial-carousel-three owl-carousel owl-theme default-dots">
              {testimonial.items.map((item, index) => (
                <SwiperSlide key={index} className="slide-item">
                  <div className="testimonial-block">
                    <div className="inner-box text-center">
                        <div className="rating">
                        {[...Array(item.rating)].map((_, i) => (
                          <i key={i} className="icon fa fa-star"></i>
                        ))}
                        </div>
                        <div className="text">"{item.text}"</div>
                        <div className="info-box">
                        <h4 className="name">{item.name} -</h4>
                        <span className="designation">{item.designation}</span>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          <div className="image-box">
            {testimonial.clientImages.map((client, index) => (
              <figure key={index} className={`image ${client.className} overlay-anim`}>
                <Link href={client.link}>
                  <img src={client.image} alt={client.alt}/>
                </Link>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
	</>
	);
};

export default Testimonial1

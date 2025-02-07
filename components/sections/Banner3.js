import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [ Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 550000,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner3 = () => {
    return (
        <>
        <section className="banner-section-one">
          <div className="shape-image-curve"></div>
          <div className="shape-image-leaf"></div>
            <Swiper {...swiperOptions} className="banner-carousel-one owl-theme">
              <SwiperSlide className="slide-item">
                <div className="bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider3-1.png)' }}></div>
                <div className="auto-container">
                  <div className="row">
                    <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="image-box">
                        <figure className="image">
                          <div className="fadeInUpBig"><div className="round-shape"></div></div>
                          <img className="animate-3 zindex" src="images/main-slider/slide3-1.png" alt=""/>
                        </figure>
                      </div>
                    </div>
                    <div className="content-box col-xl-5 col-lg-6 col-md-12 col-sm-12">
                      <figure className="image-shape animate-4 animate-x bounce-x"><img src="images/main-slider/slide3-2.png" alt=""/></figure>
                      <div className="title-stroke-text fadeInUpBig">Purerelax</div>
                      <span className="sub-title animate-2">Experience Top Expert Services</span>
                      <h1 className="title animate-3">Spa & Beauty <br/>Treatment</h1>
                      <div className="text animate-4">At PureRelax, we believe in celebrating your beauty, and we are sure you'll fall in love with the serene and luxurious experience we’ve <br/>Just crafted for your time now offer</div>
                      <div className="btn-box animate-5">
                        <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Book Now</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide className="slide-item">
                <div className="bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider3-1.png)' }}></div>
                <div className="auto-container">
                  <div className="row">
                    <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="image-box">
                        <figure className="image">
                          <div className="fadeInUpBig"><div className="round-shape"></div></div>
                          <img className="animate-3 zindex" src="images/main-slider/slide3-1.png" alt=""/>
                        </figure>
                      </div>
                    </div>
                    <div className="content-box col-xl-5 col-lg-6 col-md-12 col-sm-12">
                      <figure className="image-shape animate-4 animate-x bounce-x"><img src="images/main-slider/slide3-2.png" alt=""/></figure>
                      <div className="title-stroke-text fadeInUpBig">Purerelax</div>
                      <span className="sub-title animate-2">Experience Top Expert Services</span>
                      <h1 className="title animate-3">Spa & Beauty <br/>Treatment</h1>
                      <div className="text animate-4">At PureRelax, we believe in celebrating your beauty, and we are sure you'll fall in love with the serene and luxurious experience we’ve <br/>Just crafted for your time now offer</div>
                      <div className="btn-box animate-5">
                        <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Book Now</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </section>
        </>
    );
};
export default Banner3
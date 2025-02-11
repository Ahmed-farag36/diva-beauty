import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import data from "@/content/pages/home.json";

const swiperOptions = {
    modules: [ Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    loop: true
};

const Banner1 = () => {
    return (
        <>
        <section className="main-slider">
            <Swiper {...swiperOptions}>
                {data.banner.slides.map((slide, index) => (
                    <SwiperSlide className="slide-item" key={index}>
                        <div className="image-curve"></div>
                        <div className="bg bg-image" style={{ backgroundImage: `url(${slide.backgroundImage})` }}></div>
                        <div className="auto-container content-box">
                            <figure className="image-leap image-style-one bounce-y">
                                <img src={slide.leapImage} alt="Leap Image"/>
                            </figure>
                            <span className="sub-title">{slide.subTitle}</span>
                            <h1 className="title">
                                {slide.title.part1} <br /> {slide.title.part2}
                            </h1>
                            <Link href={slide.button.link} className="theme-btn btn-style-one">
                                <span className="btn-title">{slide.button.text}</span>
                            </Link>
                            <figure className="image">
                                <img src={slide.image1} alt="Image"/>
                            </figure>
                            <figure className="image2">
                                <img src={slide.image2} alt="Image"/>
                            </figure>
                            <span className="style-title">{slide.styleTitle}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        </>
    );
};

export default Banner1;
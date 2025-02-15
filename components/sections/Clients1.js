import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints:{
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 6,
        },
    }
};

const Clients1 = ({ data }) => {
    const { clients } = data;
    
    return (
        <>
        <section className="clients-section">
          <div className="auto-container">
              <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme">
                  {clients.items.map((client, index) => (
                      <SwiperSlide key={index} className="client-block">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image">
                                      <Link href={client.link}>
                                          <img src={client.image} alt={client.name} />
                                      </Link>
                                  </figure>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
        </section>
        </>
    );
};

export default Clients1;

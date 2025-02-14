import Link from "next/link";

const Services = ({ services }) => {
  return (
    <section className="services-section pt-100">
      <div className="service1-pattrn1 bounce-y"></div>
      <div className="auto-container">
        <h2 className="category-title" id={services[0].category}>{services[0].category}</h2>
        <div className="outer-box">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div
                      className="bg-image"
                      style={{
                        backgroundImage: `url(${
                          service.bgImage
                        })`,
                      }}
                    ></div>
                    <div
                      className="bg-image-two"
                      style={{
                        backgroundImage: `url(${
                          service.bgImageTwo
                        })`,
                      }}
                    ></div>
                  </div>
                  <div className="content-box">
                    <figure className="icon mb-0">
                      <img src={service.icon} alt={service.title} />
                    </figure>
                    <h4 className="title">
                      <Link href={service.link}>
                        {service.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

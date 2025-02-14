import Link from "next/link";
import { useState } from "react";

const ServiceDetails = ({ serviceData }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      {serviceData?.sidebarMenu?.map((item, index) => (
                        <li key={index} className={index === 0 ? "current" : ""}>
                          <Link href={item.link}>
                            <i className="fas fa-angle-right"></i>
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">Price {serviceData.price}</h2>
                    <h2 className="help-title">Duration {serviceData.duration}</h2>
                  </div>

                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">
                      {serviceData.contact.title}
                    </h2>
                    <div className="help-icon">
                      <span className={serviceData.contact.icon}></span>
                    </div>
                    <div className="help-contact">
                      <p>{serviceData.contact.subtitle}</p>
                      <Link href={`tel:${serviceData.contact.phone}`}>{serviceData.contact.phone}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img src={serviceData.overview.mainImage} alt={serviceData.title} />
                <h3 className="mt-4">Service Overview</h3>
                <p>{serviceData.overview.description}</p>
                <p>{serviceData.overview.additionalDescription}</p>

                <div className="content mt-40">
                  <div className="text">
                    <h3>{serviceData.serviceCenter.title}</h3>
                    <p>{serviceData.serviceCenter.description}</p>
                    <blockquote className="blockquote-one">
                      {serviceData.serviceCenter.quote}
                    </blockquote>
                  </div>

                  <div className="feature-list mt-4">
                    <div className="row clearfix">
                      {serviceData.serviceCenter.featureImages.map((feature, index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 column">
                          <img className="mb-3" src={feature.image} alt="images" />
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-25">
                  <h3>Frequently Asked Question</h3>
                  <p>
                    Lorem ipsum is simply free text used by copytyping refreshing.
                  </p>
                  <ul className="accordion-box wow fadeInRight">
                    {serviceData.faq.map((faq, index) => (
                      <li key={index} className="accordion block">
                        <div
                          className={isActive.key == index + 1 ? "acc-btn active" : "acc-btn"}
                          onClick={() => handleClick(index + 1)}
                        >
                          {faq.question}
                          <div className="icon fa fa-plus"></div>
                        </div>
                        <div
                          className={
                            isActive.key == index + 1
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">{faq.answer}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;

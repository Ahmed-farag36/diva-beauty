import Link from "next/link"

const Pricing1 = ({ data }) => {
    const { pricing } = data;
    
    return (
        <>
        <section className="pricing-section">
          <div className="leaf1 bounce-x"></div>
          <div className="leaf2 bounce-x"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image">
                <img src={pricing.header.icon} alt="Price Icon"/>
              </figure>
              <span className="sub-title">{pricing.header.subTitle}</span>
              <h2 className="words-slide-up text-split">{pricing.header.title}</h2>
            </div>
            <div className="row align-items-center">
              <div className="content-column col-lg-4">
                {pricing.items.map((item, index) => (
                  index % 2 === 0 && (
                    <div key={index} className="pricing-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image overlay-anim mb-0">
                            <Link href={item.link}>
                              <img src={item.image} alt={item.title}/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box">
                          <div className="inner">
                            <h5 className="title">
                              <Link href={item.link}>{item.title}</Link>
                            </h5>
                            <div className="text">{item.description}</div>
                          </div>
                          <span className="price">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
              <div className="image-column col-lg-4">
                <div className="inner-box">
                  <div 
                    className="bg bg-image bounce-y" 
                    style={{ backgroundImage: `url(${pricing.centerImage.bgImage})` }}
                  ></div>
                  <figure className="image overlay-anim mb-0">
                    <img src={pricing.centerImage.image} alt="Center Image"/>
                  </figure>
                </div>
              </div>
              <div className="content-column col-lg-4">
                {pricing.items.map((item, index) => (
                  index % 2 === 1 && (
                    <div key={index} className="pricing-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image overlay-anim mb-0">
                            <Link href={item.link}>
                              <img src={item.image} alt={item.title}/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box">
                          <div className="inner">
                            <h5 className="title">
                              <Link href={item.link}>{item.title}</Link>
                            </h5>
                            <div className="text">{item.description}</div>
                          </div>
                          <span className="price">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>
        </>
    );
};

export default Pricing1;
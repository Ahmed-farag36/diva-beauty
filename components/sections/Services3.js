const Services3 = ({ addClass }) => {
    return (
        <>
        <section className={`services-section-six ${addClass}`}>
          <div className="bg bg-image-four" style={{ backgroundImage: 'url(/images/background/bg-service2.jpg)' }}></div>
          <div className="leaf-1 bounce-y"><img src="images/resource/service-leaf-1.png" alt=""/></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="sec-title text-center">
                <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                <span className="sub-title">What We Do</span>
                <h2 className="words-slide-up text-split">Our Services</h2>
              </div>
              <div className="row justify-content-center">
                <div className="service-block-six col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="thumb-icon">
                      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/service-icon-bg.svg)' }}></div>
                      <img src="images/resource/service-icon-1.svg" alt=""/>
                    </div>
                    <div className="shape-btn">
                      <svg width="160" height="160" viewBox="0 0 160 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1574 20.5622C18.5298 6.25806 6.20765 0.894009 0 0H142V97C138.648 83.4111 126.769 80.6098 121.248 80.9078H35.3836C22.3475 80.1926 18.4678 69.8817 18.1574 64.8157C18.0022 56.0246 17.7849 34.8664 18.1574 20.5622Z" fill="black"/>
                      </svg>
                    </div>
                    <div className="service-btn"><a className="btn" href=""><i className="fa-sharp far fa-arrow-right"></i></a></div>
                    <div className="read-more"><i className="flaticon flaticon-stethoscope-3"></i></div>
                    <div className="service-content">
                      <h4 className="title">Modern Beauty</h4>
                      <p className="text">Our beauty salon offers wide range offer the services to cater to your beauty needs from head to toe. Treat your tresses to a curtedy stylish haircut over time actions now</p>
                    </div>
                  </div>
                </div>
      
                <div className="service-block-six col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="thumb-icon">
                      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/service-icon-bg.svg)' }}></div>
                      <img src="images/resource/service-icon-2.svg" alt=""/>
                    </div>
                    <div className="shape-btn">
                      <svg width="160" height="160" viewBox="0 0 160 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1574 20.5622C18.5298 6.25806 6.20765 0.894009 0 0H142V97C138.648 83.4111 126.769 80.6098 121.248 80.9078H35.3836C22.3475 80.1926 18.4678 69.8817 18.1574 64.8157C18.0022 56.0246 17.7849 34.8664 18.1574 20.5622Z" fill="black"/>
                      </svg>
                    </div>
                    <div className="service-btn"><a className="btn" href=""><i className="fa-sharp far fa-arrow-right"></i></a></div>
                    <div className="read-more"><i className="flaticon flaticon-stethoscope-3"></i></div>
                    <div className="service-content">
                      <h4 className="title">Facial Treatments</h4>
                      <p className="text">Our beauty salon offers wide range offer the services to cater to your beauty needs from head to toe. Treat your tresses to a curtedy stylish haircut over time actions now</p>
                    </div>
                  </div>
                </div>
      
                <div className="service-block-six col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="thumb-icon">
                      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/service-icon-bg.svg)' }}></div>
                      <img src="images/resource/service-icon-3.svg" alt=""/>
                    </div>
                    <div className="shape-btn">
                      <svg width="160" height="160" viewBox="0 0 160 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1574 20.5622C18.5298 6.25806 6.20765 0.894009 0 0H142V97C138.648 83.4111 126.769 80.6098 121.248 80.9078H35.3836C22.3475 80.1926 18.4678 69.8817 18.1574 64.8157C18.0022 56.0246 17.7849 34.8664 18.1574 20.5622Z" fill="black"/>
                      </svg>
                    </div>
                    <div className="service-btn"><a className="btn" href=""><i className="fa-sharp far fa-arrow-right"></i></a></div>
                    <div className="read-more"><i className="flaticon flaticon-stethoscope-3"></i></div>
                    <div className="service-content">
                      <h4 className="title">Body Waxing</h4>
                      <p className="text">Our beauty salon offers wide range offer the services to cater to your beauty needs from head to toe. Treat your tresses to a curtedy stylish haircut over time actions now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-bottom"><div className="inner-text">You Get More Services <a href="page-services">Explore Now <i className="fa-sharp far fa-arrow-right"></i></a></div></div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Services3
import Link from 'next/link';
const WhyChooseUs7 = () => {
    return (
        <>
        <section className="whychose-section-home7 pb-md-120">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/whychose-bg-home7.jpg)' }}></div>
          <div className="leaf-1 bounce-y d-none d-lg-block"><img src="images/resource/service-leaf-1.png" alt=""/></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="whychose-us-title wow fadeInUp">Purerelax</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-xl-5 wow fadeInRight d-none d-lg-block">
                <div className="image-column">
                  <div className="inner-content">
                    <img src="images/resource/whychose-img-home7.png" alt="" className="img-1"/>
                    <img src="images/resource/whychose-stone-home7.png" alt="" className="img-2"/>
                    <img src="images/resource/leaf5.png" alt="" className="img-3"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 offset-xl-1 wow fadeInLeft">
                <div className="content-column">
                  <div className="inner-content">
                    <div className="sec-title mb-25">
                      <figure className="image"><img src="images/icons/icon2.png" alt="Image"/></figure>
                      <span className="sub-title">Result Driven Products</span>
                      <h2 className="words-slide-up text-split">Chemical Free Collections</h2>
                    </div>
                    <div className="text mb-30">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec.</div>
                    <div className="list-style1-home7 d-flex align-items-center">
                      <ul className="list-style1-home7">
                        <li className="mb-15"><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Body Scrubs</li>
                        <li><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Cellulite Treatments</li>
                      </ul>
                      <ul className="list-style1-home7 ml-40">
                        <li className="mb-15"><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Back Treatments</li>
                        <li><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Body Polish</li>
                      </ul>
                    </div>
                    <Link href="page-contact" className="theme-btn btn-style-one mt-40">APPOINTMENT NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default WhyChooseUs7
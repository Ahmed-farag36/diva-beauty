import Link from "next/link"
const About3 = () => {
    return (
        <>
        <section className="banners-section-two">
          <div className="container pt-0 pb-0">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">About Us</span>
              <h2 className="words-slide-up text-split">Building Physically & <br/>Mental Health</h2>
            </div>
            <div className="row">
              <div className="banner-box-two col-lg-6 col-md-12">
                <div className="inner-box overlay-anim">
                  <div className="image"><img src="images/resource/banner2-1.jpg" alt=""/></div>
                  <div className="content">
                    <h3 className="title">Spa & Massage</h3>
                    <div className="text">A good clay mask can go a long way to draw out impurities skin.</div>
                    <Link href="page-service-details" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
              </div>
      
              <div className="banner-box-two col-lg-6 col-md-12">
                <div className="inner-box style-two overlay-anim">
                  <div className="image"><img src="images/resource/banner2-2.jpg" alt=""/></div>
                  <div className="content">
                    <h3 className="title">Body Massage</h3>
                    <div className="text">A good clay mask can go a long way to draw out impurities skin.</div>
                    <Link href="page-service-details" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About3
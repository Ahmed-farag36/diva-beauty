import Link from "next/link"
const About8 = () => {
    return (
        <>
        <section className="about-section-five">
          <div className="about8-2"></div>
          <div className="about8-1"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="content-column col-xl-4 col-lg-6 col-md-6">
                  <div className="inner-column">
                    <div className="sec-title mb-0">
                      <figure className="image"><img src="images/icons/icon2.png" alt="Image"/></figure>
                      <span className="sub-title">Get to know us</span>
                      <h2 className="words-slide-up">Beauty and <strong>Spa <span>Center</span></strong></h2>
                      <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.</div>
                    </div>
                    <ul className="list-style">
                      <li><figure className="icon"><img src="images/icons/theme-icon4.png" alt="Image"/></figure> Velit orci consectetur ligula, eget egestas magn</li>
                      <li><figure className="icon"><img src="images/icons/theme-icon4.png" alt="Image"/></figure> Pelit orci consectetur ligula</li>
                      <li><figure className="icon"><img src="images/icons/theme-icon4.png" alt="Image"/></figure> Eget egestas magn</li>
                    </ul>
                    <div className="author-box">
                      <div className="inner d-block d-sm-flex">
                        <Link href="page-about" className="theme-btn btn-style-two btn pricing-btn mb-4 mb-sm-0"><span className="btn-title">Book Now</span></Link>
                        <figure className="thumb"><img src="images/resource/about8-2.png" alt="Image"/></figure>
                        <div className="info">
                          <div className="sign">
                            <img src="images/resource/about-sign1.png" alt="Signature"/>
                          </div>
                          <div className="name">Michale - <span className="designation">Co Founder</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="image-column col-xl-4 col-lg-6 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="image-box">
                      <figure className="image overlay-anim"><img src="images/resource/about8-1.jpg" alt="Image"/></figure>
                    </div>
                  </div>
                </div>
      
                <div className="timetable-block col-xl-4 col-lg-6 col-md-6 wow fadeInRight">
                  <div className="inner">
                    <div className="content-top">
                      <figure className="icon"><img src="images/icons/clock1.png" alt="Image"/></figure>
                      <h4 className="title">Opening Hours</h4>
                    </div>
                    <div className="content">
                      <div className="time-box">
                        <h4 className="title"><i className="icon fa-sharp fa-thin fa-clock"></i> Hours:</h4>
                        <div className="opening-days">Mon to Fri: 7:30 am - 1:00 am</div>
                        <div className="opening-days">Sat: 7:30 am - 1:00 am</div>
                        <div className="opening-days">Sun: 7:30 am - 1:00 am</div>
                      </div>
                      <div className="time-box">
                        <h4 className="title"><i className="icon fa-solid fa-location-dot"></i> Location:</h4>
                        <div className="time-box-address">85 Royal Mint Street, <br/>London, E1 8LG <br/>United Kingdom</div>
                      </div>
                      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/about8-4.png)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About8
import Link from "next/link"
const About5 = () => {
    return (
        <>
        <section className="about-section pb-sm-40 pb-lg-70 pb-150 pt-50">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="image-column col-xl-5 offset-xl-1 col-lg-6 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="image-box">
                      <div className="exp-box">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/about1-6.png)' }}></div>
                        <div className="inner">
                          <h2 className="title" data-text="25+">20+</h2>
                          <span className="text">Experience</span>
                        </div>
                      </div>
                      <figure className="image overlay-anim"><img src="images/resource/about1-1.png" alt="Image"/></figure>
                      <div className="bg bg-image-one bounce-x" style={{ backgroundImage: 'url(/images/resource/about1-3.png)' }}></div>
                      <div className="bg bg-image-two bounce-y" style={{ backgroundImage: 'url(/images/resource/about1-4.png)' }}></div>
                      <div className="bg bg-image-three" style={{ backgroundImage: 'url(/images/resource/about1-7.png)' }}></div>
                      <div className="bg bg-image-four bounce-Y" style={{ backgroundImage: 'url(/images/resource/about1-8.png)' }}></div>
                    </div>
                  </div>
                </div>
                <div className="content-column col-xl-5 ps-3 ps-lg-5 col-lg-6 wow fadeInRight">
                  <div className="inner-column">
                    <div className="sec-title mb-0">
                      <span className="sub-title">Get to know us</span>
                      <h2 className="words-slide-up">Beauty and <strong>Spa <br />Center</strong></h2>
                      <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit tempor donec sociosqu, maecenas ullamcorper facilisis volutpat egestas sociis etiam cubilia fringilla, nullam.</div>
                    </div>
                    <ul className="list-style">
                      <li><figure className="icon"><img src="images/icons/theme-icon4.png" alt="Image"/></figure> Velit orci consectetur ligula, eget egestas magner time over</li>
                      <li><figure className="icon"><img src="images/icons/theme-icon4.png" alt="Image"/></figure> Pelit orci consectetur ligula time of money of you.</li>
                      <li><figure className="icon"><img src="images/icons/theme-icon4.png" alt="Image"/></figure> Eget egestas magn over the year of time.</li>
                    </ul>
                    <div className="author-box">
                      <div className="inner d-block d-sm-flex">
                        <Link href="page-about" className="theme-btn btn-style-two btn pricing-btn mb-4 mb-sm-0"><span className="btn-title">Learn More</span></Link>
                        <figure className="thumb"><img src="images/resource/about1-2.png" alt="Image"/></figure>
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
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About5
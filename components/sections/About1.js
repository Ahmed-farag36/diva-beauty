import Link from "next/link"

const About1 = ({ data }) => {
    const { about } = data;
    
    return (
        <>
        <section className="about-section">
          <div className="about1-9 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="image-column col-xl-5 col-lg-6 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="image-box">
                      <div className="exp-box">
                        <div className="bg bg-image" style={{ backgroundImage: `url(${about.experienceBox.bgImage})` }}></div>
                        <div className="inner">
                          <h2 className="title" data-text={about.experienceBox.years}>{about.experienceBox.years}</h2>
                          <span className="text">{about.experienceBox.text}</span>
                        </div>
                      </div>
                      <figure className="image overlay-anim"><img src={about.mainImage} alt="About"/></figure>
                      <div className="bg bg-image-one bounce-x" style={{ backgroundImage: `url(${about.bgImage1})` }}></div>
                      <div className="bg bg-image-two bounce-y" style={{ backgroundImage: `url(${about.bgImage2})` }}></div>
                      <div className="bg bg-image-three" style={{ backgroundImage: `url(${about.bgImage3})` }}></div>
                      <div className="bg bg-image-four bounce-Y" style={{ backgroundImage: `url(${about.bgImage4})` }}></div>
                    </div>
                  </div>
                </div>
                <div className="content-column col-xl-4 col-lg-6 col-md-6">
                  <div className="inner-column">
                    <div className="sec-title mb-0">
                      <span className="sub-title">{about.content.subTitle}</span>
                      <h2 className="words-slide-up">{about.content.titlePart1} <strong>{about.content.titlePart2}</strong></h2>
                      <div className="text">{about.content.description}</div>
                    </div>
                    <ul className="list-style">
                      {about.content.features.map((feature, index) => (
                        <li key={index}>
                          <figure className="icon"><img src={feature.icon} alt="Icon"/></figure>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <div className="author-box">
                      <div className="inner d-block d-sm-flex">
                        <Link href="page-about" className="theme-btn btn-style-two btn pricing-btn mb-4 mb-sm-0">
                          <span className="btn-title">Learn More</span>
                        </Link>
                        <figure className="thumb"><img src={about.author.image} alt="Author"/></figure>
                        <div className="info">
                          <div className="sign">
                            <img src={about.author.signature} alt="Signature"/>
                          </div>
                          <div className="name">{about.author.name} - <span className="designation">{about.author.designation}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="timetable-block col-xl-3 col-lg-6 col-md-6 wow fadeInRight">
                  <div className="inner">
                    <div className="content-top">
                      <figure className="icon"><img src={about.openingHours.icon} alt="Clock"/></figure>
                      <h4 className="title">{about.openingHours.title}</h4>
                    </div>
                    <div className="content">
                      <div className="time-box">
                        <div className="opening-days">Monday to Friday :</div>
                        <div className="opening-hours">{about.openingHours.weekdayHours}</div>
                      </div>
                      <div className="time-box m-0">
                        <div className="opening-days">Saturday :</div>
                        <div className="opening-hours">{about.openingHours.saturdayHours}</div>
                      </div>
                      <div className="bg bg-image" style={{ backgroundImage: `url(${about.openingHours.bgImage})` }}></div>
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

export default About1;
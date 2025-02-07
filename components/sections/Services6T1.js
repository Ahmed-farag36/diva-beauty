import Link from "next/link"
const Services6T1 = () => {
    return (
        <>
        <section className="services-section-three">
          <div className="service1-pattrn1 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="service-block-three col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service3-1.jpg)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="images/icons/icon-leaf1.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Body</Link></h4>
                      <div className="text">Swedish Massage</div>
                    </div>
                  </div>
                </div>
                <div className="service-block-three col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service3-1.jpg)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="images/icons/icon-leaf2.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Beauty</Link></h4>
                      <div className="text">Message & Treatment</div>
                    </div>
                  </div>
                </div>
                <div className="service-block-three col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service3-1.jpg)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="images/icons/icon-leaf1.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Treatment</Link></h4>
                      <div className="text">Oil Treatment</div>
                    </div>
                  </div>
                </div>
                <div className="service-block-three col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service3-1.jpg)' }}></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0"><img src="images/icons/icon-leaf3.png" alt="Image"/></figure>
                      <h4 className="title"><Link href="page-service-details">Message</Link></h4>
                      <div className="text">Spa & Oil Treatment</div>
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
export default Services6T1
import Link from "next/link"
const Services6 = () => {
    return (
        <>
        <section className="services-section-five pb-0">
          <div className="service1-pattrn1 bounce-y"></div>
          <div className="outer-box">
            <div className="sec-title text-center">
              <div className="title-stroke-text">Service</div>
              <figure className="image"><img src="images/icons/icon2.png" alt="Image"/></figure>
              <span className="sub-title">Services list</span>
              <h2 className="words-slide-up text-split">Our Services Will Make <br/>You Glow</h2>
            </div>
            <div className="row gx-0">
              <div className="service-block-four col-xxl-3 col-xl-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service4-1.jpg)' }}></div>
                  </div>
                  <div className="content-box">
                    <h4 className="title"><Link href="page-service-details">Relax & Enjoy</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration simply free text in some form</div>
                    <Link href="page-service-details" className="theme-btn btn-style-two btn"><span className="btn-title">Book Now</span></Link>
                    <figure className="icon mb-0"><img src="images/icons/icon-s1.png" alt="Image"/></figure>
                  </div>
                </div>
              </div>
              <div className="service-block-four col-xxl-3 col-xl-6 col-sm-6">
                <div className="inner-box style-two">
                  <div className="image-box">
                    <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service4-1.jpg)' }}></div>
                  </div>
                  <div className="content-box">
                    <h4 className="title"><Link href="page-service-details">Facial Masking</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration simply free text in some form</div>
                    <Link href="page-service-details" className="theme-btn btn-style-two btn"><span className="btn-title">Book Now</span></Link>
                    <figure className="icon mb-0"><img src="images/icons/icon-s2.png" alt="Image"/></figure>
                  </div>
                </div>
              </div>
              <div className="service-block-four col-xxl-3 col-xl-6 col-sm-6">
                <div className="inner-box style-three">
                  <div className="image-box">
                    <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service4-1.jpg)' }}></div>
                  </div>
                  <div className="content-box">
                    <h4 className="title"><Link href="page-service-details">Body Oil Message</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration simply free text in some form</div>
                    <Link href="page-service-details" className="theme-btn btn-style-two btn"><span className="btn-title">Book Now</span></Link>
                    <figure className="icon mb-0"><img src="images/icons/icon-s1.png" alt="Image"/></figure>
                  </div>
                </div>
              </div>
              <div className="service-block-four col-xxl-3 col-xl-6 col-sm-6">
                <div className="inner-box style-four">
                  <div className="image-box">
                    <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/service4-1.jpg)' }}></div>
                  </div>
                  <div className="content-box">
                    <h4 className="title"><Link href="page-service-details">Body Treatment</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration simply free text in some form</div>
                    <Link href="page-service-details" className="theme-btn btn-style-two btn"><span className="btn-title">Book Now</span></Link>
                    <figure className="icon mb-0"><img src="images/icons/icon-s3.png" alt="Image"/></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Services6
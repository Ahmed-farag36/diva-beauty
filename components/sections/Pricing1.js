import Link from "next/link"
const Pricing1 = () => {
    return (
        <>
        <section className="pricing-section">
          <div className="leaf1 bounce-x"></div>
          <div className="leaf2 bounce-x"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Price</span>
              <h2 className="words-slide-up text-split">Spa Treatments With <br/> Pricing</h2>
            </div>
            <div className="row align-items-center">
              <div className="content-column col-lg-4">
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price1-2.jpg" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h5 className="title"><Link href="page-pricing">Manicure</Link></h5>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price1-3.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h5 className="title"><Link href="page-pricing">Face facial</Link></h5>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$40</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price1-4.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h5 className="title"><Link href="page-pricing">Makeup & Massage</Link></h5>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$50</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-4">
                <div className="inner-box">
                  <div className="bg bg-image bounce-y" style={{ backgroundImage: 'url(/images/resource/flower1.png)' }}></div>
                  <figure className="image overlay-anim mb-0">
                    <img src="images/resource/price1-1.png" alt="Image"/>
                  </figure>
                </div>
              </div>
              <div className="content-column col-lg-4">
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price1-2.jpg" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h5 className="title"><Link href="page-pricing">Manicure</Link></h5>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price1-3.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h5 className="title"><Link href="page-pricing">Face facial</Link></h5>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$40</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price1-4.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h5 className="title"><Link href="page-pricing">Makeup & Massage</Link></h5>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$50</span>
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
export default Pricing1
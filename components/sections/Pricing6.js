import Link from "next/link"
const Pricing6 = () => {
    return (
        <>
        <section className="pricing-section-four pb-0">
          <div className="leaf1"></div>
          <div className="leaf2"></div>
          <div className="leaf5"></div>
          <div className="leaf6"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="title-stroke-text">PRICING</div>
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
                        <Link href="page-pricing"><img src="images/resource/price2-2.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h3 className="title"><Link href="page-pricing">Manicure</Link></h3>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price2-3.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h3 className="title"><Link href="page-pricing">Face facial</Link></h3>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$40</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price2-4.png" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h3 className="title"><Link href="page-pricing">Makeup</Link></h3>
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
                    <img src="images/resource/price4-1.jpg" alt="Image"/>
                  </figure>
                </div>
              </div>
              <div className="content-column col-lg-4">
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price2-5.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h3 className="title"><Link href="page-pricing">Pedicure</Link></h3>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price2-6.png" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h3 className="title"><Link href="page-pricing">Body Massage</Link></h3>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$40</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0"><Link href="page-pricing"><img src="images/resource/price2-7.png" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h3 className="title"><Link href="page-pricing">Thererapy</Link></h3>
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
export default Pricing6
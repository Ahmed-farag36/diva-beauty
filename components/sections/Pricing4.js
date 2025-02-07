import Link from "next/link"
const Pricing4 = () => {
    return (
        <>
        <section className="pricing-section-two">
          <div className="container pb-0 pt-0">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Price</span>
              <h2 className="words-slide-up text-split">Choose Your Makeover <br/>Plan Now</h2>
            </div>
            <div className="row align-items-center">
              <div className="content-column col-lg-6">
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Face Lifting</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Mini Face Lift</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Mesoglow</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Botox</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-6">
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Manicure</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Meso Therapy</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Skin Detox</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">Face Serum</Link></h4>
                        <div className="text">20mins revitalize facial</div>
                      </div>
                      <span className="price">$30</span>
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
export default Pricing4
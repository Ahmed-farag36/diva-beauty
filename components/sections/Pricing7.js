import Link from "next/link"
const Pricing7 = () => {
    return (
        <>
        <section className="packages-section-three home7-style pt-90">
          <div className="outer-box">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Price</span>
              <h2 className="words-slide-up text-split">Choose Your Makeover <br/>Plan Now</h2>
            </div>
            <div className="row">
              <div className="package-block-three home7-style col-xl-3 col-sm-6">
                <div className="inner-box">
                  <div className="content-box">
                    <h4 className="name"><Link href="page-pricing">Daily Makeover</Link></h4>
                    <span className="price">12$</span>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing  potenti ante varius habitant curae musa proin aliquet</div>
                    <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
              </div>
      
              <div className="package-block-three home7-style col-xl-3 col-sm-6">
                <div className="inner-box">
                  <div className="content-box">
                    <h4 className="name"><Link href="page-pricing">Oil & Spa Messages</Link></h4>
                    <span className="price">20$</span>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing  potenti ante varius habitant curae musa proin aliquet</div>
                    <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
              </div>
      
              <div className="package-block-three home7-style col-xl-3 col-sm-6">
                <div className="inner-box">
                  <div className="content-box">
                    <h4 className="name"><Link href="page-pricing">Weeding Makeup</Link></h4>
                    <span className="price">30$</span>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing  potenti ante varius habitant curae musa proin aliquet</div>
                    <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
              </div>
      
              <div className="package-block-three home7-style col-xl-3 col-sm-6">
                <div className="inner-box">
                  <div className="content-box">
                    <h4 className="name"><Link href="page-pricing">Foot Spa & Clean</Link></h4>
                    <span className="price">50$</span>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing  potenti ante varius habitant curae musa proin aliquet</div>
                    <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Pricing7
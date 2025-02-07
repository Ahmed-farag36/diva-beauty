import Link from "next/link";
const ProductBanner4 = () => {
    return (
        <>
        <section className="product-banner-hom4-style1">
          <div className="container-fluid p-0">
            <div className="contant-inner" style={{ backgroundImage: 'url(/images/background/banner2-home4-style.jpg)' }}>
              <div className="contant-box">
                <h2 className="title">We procure high certified goods from the USA to ensure your complete satisfaction.</h2>
                <p className="text">Our skilled therapists, with their expert hands and nurturing souls,  guide you on a personalized journey <br className="d-none d-xxl-block" /> wellness and renewal. Immerse yourself in our opulent facilities.</p>
                <div className="d-flex align-items-center">
                  <Link href="" className="theme-btn btn-style-two light-bg mr-15">LEARN MORE US</Link>
                  <Link href="" className="theme-btn btn-style-two transparent-bg">VIEW PRODUCTS</Link>
                </div>
              </div>
            </div>
            <div className="bg bg-image d-none d-xl-block" style={{ backgroundImage: 'url(/images/background/banner1-home4-style.jpg)' }}></div>
          </div>
        </section>
        </>
    );
};
export default ProductBanner4
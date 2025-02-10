import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/innerpages/Services";
import PageTitle from "@/components/sections/PageTitle";
import Testimonial1 from "@/components/sections/Testimonial1";
import Link from "next/link";
export default function PageTestimonial() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Services Grid" />
        <h2>Massage</h2>
        <Services />
        <h2>Körperbehandlung</h2>
        <Services />
        <h2>Gesichtsbehandlung</h2>
        <Services />
        <h2>Diplation</h2>
        <Services />
        <section className="instagram-section">
          <div className="icon-instagram1-6 bounce-x"></div>
          <div className="icon-instagram1-7 bounce-y"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <h4 className="words-slide-up text-split">Follow On Instagram</h4>
            </div>
            <div className="row">
              <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src="images/resource/instagram1-1.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src="images/resource/instagram1-2.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src="images/resource/instagram1-3.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src="images/resource/instagram1-1.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src="images/resource/instagram1-4.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src="images/resource/instagram1-5.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

import Link from "next/link";
import footerData from "@/content/pages/footer.json";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div className="widgets-section">
          <div className="footer1-1 bounce-x"></div>
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-lg-4 col-md-6 order-1">
                <div className="footer-widget timetable-widget">
                  <h3 className="widget-title">
                    {footerData.openingHours.title}
                  </h3>
                  <ul className="timetable">
                    {footerData.openingHours.hours.map((item, index) => (
                      <li key={index}>
                        {item.day} : <span>{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-column col-lg-4 col-md-6 order-0 order-lg-1">
                <div className="footer-widget about-widget text-center">
                  <div className="logo">
                    <Link href="/">
                      <img src={footerData.center.logo} alt="" />
                    </Link>
                  </div>
                  <div className="text">{footerData.center.description}</div>
                  <ul className="social-icon">
                    {footerData.center.socialLinks.map((social, index) => (
                      <li key={index}>
                        <Link href={social.link}>
                          <i className={`icon fab fa-${social.platform}`}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-column col-lg-4 col-md-6 order-2">
                <div className="footer-widget contacts-widget">
                  <h3 className="widget-title">{footerData.contact.title}</h3>
                  <div className="text">{footerData.contact.address}</div>
                  <ul className="contact-info">
                    <li>
                      <Link href={`tel:${footerData.contact.phone}`}>
                        {footerData.contact.phone}
                      </Link>
                    </li>
                    <li>
                      <Link href={`mailto:${footerData.contact.email}`}>
                        {footerData.contact.email}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <figure className="image">
                <img src={footerData.bottomBar.bottomImage} alt="Image" />
              </figure>
              <div className="copyright-text">
                {footerData.bottomBar.copyrightText}{" "}
                <Link href="/">{footerData.bottomBar.copyrightLink}</Link>
              </div>
              <Link className="link" href={footerData.bottomBar.termsLink}>
                {footerData.bottomBar.termsText}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

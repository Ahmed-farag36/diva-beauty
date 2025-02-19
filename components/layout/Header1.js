import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import headerData from "@/content/pages/header.json";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  groupedServices = {},
  data
}) {  
  return (
    <>
      <header
        className={`main-header header-style-one ${
          isSearch ? "moblie-search-active" : ""
        }`}
      >
        <div className="outer-box">
          <div className="header-top">
            <div className="inner-container">
              <div className="top-left">
                <ul className="list-style-one">
                  <li>
                    <Link href={`mailto:${data.topBar.email}`}>
                      {data.topBar.email}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="top-right">
                <ul className="list-style-two">
                  <li>{data.topBar.hoursText}</li>
                </ul>
                <ul className="social-icon-one">
                  {data.topBar.socialLinks.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link}>
                        <span
                          className={`icon fab fa-${social.platform}`}
                        ></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="header-lower">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src={data.logo.light} alt="Logo" />
                  </Link>
                </div>
              </div>

              <div className="nav-outer">
                <nav className="nav main-menu">
                  <Menu
                    groupedServices={groupedServices}
                    menuData={data}
                  />
                </nav>
              </div>

              <div className="outer-box">
                {/* <button className="ui-btn search-btn" onClick={handleSearch}>
                        <i className="icon fal fa-search"></i>
                        </button> */}

                <div className="divider"></div>

                <div className="btn-box">
                  <Link
                    href={data.bookNowButton.link}
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">
                      {data.bookNowButton.text}
                    </span>
                  </Link>
                </div>

                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleMobileMenu} />

          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img src={data.logo.dark} alt="" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu groupedServices={groupedServices} />
            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <Link href={`tel:${data.mobileMenuContacts.phone}`}>
                    {data.mobileMenuContacts.phone}
                  </Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <Link href={`mailto:${data.mobileMenuContacts.email}`}>
                    {data.mobileMenuContacts.email}
                  </Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Working Hours</span>
                  {data.mobileMenuContacts.hours}
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link href="/#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <i className="fab fa-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" onClick={handleSearch} />
          <button className="close-search" onClick={handleSearch}>
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <Link href="/">
                  <img src={data.logo.dark} alt="" />
                </Link>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <Menu groupedServices={groupedServices} menuData={data} />
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
    </>
  );
}

export async function getStaticPorps() {
  return {
    props: {
      data: headerData
    }
  }
}
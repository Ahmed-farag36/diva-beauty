import Link from "next/link";

const Contact = ({ contactData }) => {
  const { contactForm, contactInfo, map } = contactData;
  
  return (
    <>
      <section className="contact-details">
        <div className="container pt-110 pb-110">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">{contactForm.title.subtitle}</span>
                <h2>{contactForm.title.heading}</h2>
              </div>
              {/* Contact Form */}
              <form
                id="contact_form"
                name="contact_form"
                className=""
                action="#"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder={contactForm.fields.name}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder={contactForm.fields.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder={contactForm.fields.subject}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder={contactForm.fields.phone}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="7"
                    placeholder={contactForm.fields.message}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one me-2"
                    data-loading-text={contactForm.button.loadingText}
                  >
                    <span className="btn-title">{contactForm.button.text}</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title mb-30">
                  <span className="sub-title">{contactInfo.title.subtitle}</span>
                  <h2>{contactInfo.title.heading}</h2>
                  <div className="text">{contactInfo.title.description}</div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  {contactInfo.details.map((detail, index) => (
                    <li key={index}>
                      <div className="icon">
                        <span className={detail.icon}></span>
                      </div>
                      <div className="text">
                        <h6>{detail.title}</h6>
                        {detail.content.link ? (
                          <Link href={detail.content.link}>
                            {detail.content.prefix && <span>{detail.content.prefix}</span>}{" "}
                            {detail.content.value}
                          </Link>
                        ) : (
                          <span>{detail.content.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src={map.src}
              data-tm-width="100%"
              height={map.height}
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

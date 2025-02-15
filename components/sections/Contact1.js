const Contact1 = ({ data }) => {
    const { contact } = data;
    
    return (
        <>
        <section className="contact-section">
          <div className="bg bg-image" style={{ backgroundImage: `url(${contact.bgImage})` }}></div>
          <div className="bg bg-image curved-shape-top" style={{ backgroundImage: `url(${contact.topShapeImage})` }}></div>
          <div className="bg bg-image curved-shape-bottom" style={{ backgroundImage: `url(${contact.bottomShapeImage})` }}></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="form-column offset-xl-7 col-xl-5 offset-lg-6 col-lg-6 offset-md-4 col-md-8">
                  <div className="inner-column">
                    <div className="contact-form">
                      <div className="sec-title">
                        <figure className="image"><img src={contact.form.icon} alt="Icon"/></figure>
                        <span className="sub-title">{contact.form.subTitle}</span>
                        <h3 className="words-slide-up text-split">{contact.form.title}</h3>
                        <div className="text">{contact.form.description}</div>
                      </div>
                      <form id="contact_form" name="contact_form" className="" action="#" method="post">
                        <div className="row">
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="form_name" placeholder={contact.form.fields.namePlaceholder} required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="email" name="form_email" placeholder={contact.form.fields.emailPlaceholder} required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="select" name="form_subject" placeholder={contact.form.fields.servicePlaceholder} required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="date" name="date" placeholder={contact.form.fields.datePlaceholder} required/>
                          </div>
                          <div className="form-group col-lg-12">
                            <textarea name="form_textarea" placeholder={contact.form.fields.messagePlaceholder} rows="2"></textarea>
                          </div>
                          <div className="form-group col-lg-12">
                            <input name="form_botcheck" className="form-control" type="hidden" value="" />
                            <button type="submit" className="theme-btn btn-style-one mb-3 mb-sm-0" data-loading-text="Please wait...">
                              <span className="btn-title">{contact.form.buttonText}</span>
                            </button>
                          </div>
                        </div>
                      </form>
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

export default Contact1;
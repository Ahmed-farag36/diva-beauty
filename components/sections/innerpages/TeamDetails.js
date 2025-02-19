import Link from "next/link";
import dynamic from "next/dynamic";

const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

const TeamDetails = ({ teamData }) => {
  const { teamMembers, contactForm } = teamData;  

  return (
    <>
      {teamMembers.map((teamMember, index) => (
        <section className="team-details" key={index}>
          <div className="container pb-100">
            <div className="team-details__top pb-70">
              <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    <img src={teamMember.image} alt={teamMember.name} />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="team-details__top-name">{teamMember.name}</h3>
                    <p className="team-details__top-title">
                      {teamMember.position}
                    </p>
                    <p className="team-details__top-text-1">
                      {teamMember.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-details__bottom pt-100">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-left">
                  <h4 className="team-details__bottom-left-title">
                    {teamMember.experience.title}
                  </h4>
                  <p className="team-details__bottom-left-text">
                    {teamMember.experience.description}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-right">
                  <div className="team-details__progress">
                    {teamMember.skills.map((skill, index) => (
                      <div key={index} className="team-details__progress-single">
                        <h4 className="team-details__progress-title">
                          {skill.title}
                        </h4>
                        <p>{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ))}

      <section className="team-contact-form pt-100">
        <div className="container pb-100">
          <div className="sec-title text-center">
            <span className="sub-title">{contactForm.title}</span>
            <h2 className="section-title__title">
              {contactForm.subtitle}
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                id="contact_form"
                name="contact_form"
                className="team-details-form"
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
                        placeholder={contactForm.fields.name.placeholder}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder={contactForm.fields.email.placeholder}
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
                        placeholder={contactForm.fields.subject.placeholder}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder={contactForm.fields.phone.placeholder}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="5"
                    placeholder={contactForm.fields.message.placeholder}
                  ></textarea>
                </div>
                <div className="mb-3 text-center">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                    data-loading-text={contactForm.button.loadingText}
                  >
                    <span className="btn-title">{contactForm.button.text}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(.team-details-form .form-control::placeholder) {
          color: #808080 !important;
          opacity: 1;
        }
        
        :global(.team-details-form .form-control:-ms-input-placeholder) {
          color: #808080 !important;
        }
        
        :global(.team-details-form .form-control::-ms-input-placeholder) {
          color: #808080 !important;
        }
      `}</style>
    </>
  );
};

export default TeamDetails;

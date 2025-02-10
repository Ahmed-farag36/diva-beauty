import Link from "next/link";
import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});
const TeamDetails = () => {
  return (
    <>
      <section className="team-details">
        <div className="container pb-100">
          <div className="team-details__top pb-70">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    <img src="images/resource/team-details.jpg" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="team-details__top-name">Aleesha Brown</h3>
                    <p className="team-details__top-title">
                      Managing Director & CEO
                    </p>
                    <p className="team-details__top-text-1 ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aliquid, voluptas, odio dolor perferendis quidem nesciunt
                      nulla officia vel asperiores incidunt hic nemo dolorem!
                      Optio a doloremque, quo accusantium adipisci vitae? <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aliquid, voluptas, odio dolor perferendis quidem nesciunt
                      nulla officia vel asperiores incidunt hic nemo dolorem!
                      Optio a doloremque, quo accusantium adipisci vitae?
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
                    Personal Experience
                  </h4>
                  <p className="team-details__bottom-left-text">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries architecto dolorem ipsum quia
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-right">
                  <div className="team-details__progress">
                    <div className="team-details__progress-single">
                      <h4 className="team-details__progress-title">
                        Tecnology
                      </h4>

                      <p>
                        When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="team-details__progress-single">
                      <h4 className="team-details__progress-title">
                        Marketing
                      </h4>
                      <p>
                        When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="team-details__progress-single">
                      <h4 className="team-details__progress-title">Business</h4>
                      <p>
                        When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-contact-form pt-100">
        <div className="container pb-100">
          <div className="sec-title text-center">
            <span className="sub-title">Contact With Us Now</span>
            <h2 className="section-title__title">
              Feel Free to Write Our <br /> Tecnology Experts
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
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
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required "
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="5"
                    placeholder="Enter Message"
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
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamDetails;

import Link from "next/link"
const Team2 = () => {
    return (
        <>
        <section className="team-section-two">
          <div className="team2-2 bounce-y"></div>
          <div className="leaf4 bounce-x"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Our team</span>
              <h2 className="words-slide-up text-split">Meet Certified Therapist</h2>
            </div>
            <div className="row">
              <div className="team-column col-xl-12">
                <div className="inner-column">
                  <div className="team-block-two">
                    <div className="inner-box">
                      <div className="info-box">
                        <h3 className="name"><Link href="page-team-details">Jordan Peele</Link></h3>
                        <span className="designation">Trainer</span>
                      </div>
                      <Link className="icon" href="page-team-details"><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/team2-1.png)' }}></div>
                    </div>
                  </div>
                  <div className="team-block-two">
                    <div className="inner-box">
                      <div className="info-box">
                        <h3 className="name"><Link href="page-team-details">Cameron Williamson</Link></h3>
                        <span className="designation">Face Maker</span>
                      </div>
                      <Link className="icon" href="page-team-details"><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/team2-1.png)' }}></div>
                    </div>
                  </div>
                  <div className="team-block-two">
                    <div className="inner-box">
                      <div className="info-box">
                        <h3 className="name"><Link href="page-team-details">Esther Howard</Link></h3>
                        <span className="designation">Body Message</span>
                      </div>
                      <Link className="icon" href="page-team-details"><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/team2-1.png)' }}></div>
                    </div>
                  </div>
                  <div className="team-block-two">
                    <div className="inner-box">
                      <div className="info-box">
                        <h3 className="name"><Link href="page-team-details">Brooklyn Simmons</Link></h3>
                        <span className="designation">Backbone Therapy</span>
                      </div>
                      <Link className="icon" href="page-team-details"><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                      <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/team2-1.png)' }}></div>
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
export default Team2
import Link from "next/link"

const Instagram1 = ({ data }) => {
    const { instagram } = data;
    
    return (
        <>
        <section className="instagram-section">
          <div className="icon-instagram1-6 bounce-x"></div>
          <div className="icon-instagram1-7 bounce-y"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <h4 className="words-slide-up text-split">{instagram.title}</h4>
            </div>
            <div className="row">
              {instagram.images.map((item, index) => (
                <div key={index} className="instagram-block col-lg-2 col-md-3 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link className="lightbox-image" href={item.link}>
                          <img src={item.image} alt={item.alt}/>
                        </Link>
                      </figure>
                      <i className="icon fab fa-instagram"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
    );
};

export default Instagram1
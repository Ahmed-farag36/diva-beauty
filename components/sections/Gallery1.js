import Link from "next/link"

const Gallery1 = ({ data }) => {
    const { gallery } = data;
    
    return (
        <>
        <section className="gallery-section">
          <div className="outer-box">
            <div className="row">
              <div className="col-xl-6">
                <div className="row">
                    <div className="gallery-block col-sm-6">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src={data.gallery.mediumImages[0].image} alt={data.gallery.mediumImages[0].alt}/>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-block col-sm-6">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src={data.gallery.smallImages[0].image} alt={data.gallery.smallImages[0].alt}/>
                          </figure>
                        </div>
                        <div className="image-box">
                          <figure className="image">
                            <img src={data.gallery.smallImages[1].image} alt={data.gallery.smallImages[1].alt}/>
                          </figure>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="gallery-block col-xl-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={gallery.mainImage.image} alt={gallery.mainImage.alt}/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};

export default Gallery1;
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
                  {gallery.sideImages.map((item, index) => (
                    <div key={index} className="gallery-block col-sm-6">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src={item.image} alt={item.alt}/>
                          </figure>
                        </div>
                      </div>
                    </div>
                  ))}
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
import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

const ShopDetails = () => {  
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* Product Details Start */}
      <section className="product-details pt-120">
        <div className="auto-container pb-70">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="product-detail-slider">
                <div className="slider-content position-relative">
                  <Swiper
                    spaceBetween={10}
                    pagination={{clickable:true}}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 mb-10">
                    <SwiperSlide>
                      <div className="image-box"><img src="/images/resource/products/product-details.jpg" alt=""/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-box"><img src="/images/resource/products/product-details2.jpg" alt=""/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-box"><img src="/images/resource/products/product-details3.jpg" alt=""/></div>
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper thumb-box">
                    <SwiperSlide className="product-thumb wide-100">
                      <figure className="image">
                        <img src="/images/resource/products/product-details.jpg" alt=""/>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide className="product-thumb wide-100">
                      <figure className="image">
                        <img src="/images/resource/products/product-details2.jpg" alt=""/>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide className="product-thumb wide-100">
                      <figure className="image">
                        <img src="/images/resource/products/product-details3.jpg" alt=""/>
                      </figure>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 product-info">
              <div className="product-details__top">
                <h3 className="product-details__title">CBD Oil Bottle <span>$96.00</span> </h3>
              </div>
              <div className="product-details__reveiw">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span>2 Customer Reviews</span>
              </div>
              <div className="product-details__content">
                <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
                <p className="product-details__content-text2"><strong>REF.</strong> 4231/406 <br/> Available in store</p>
              </div>

              <div className="product-details__quantity">
                <h3 className="product-details__quantity-title">Choose quantity</h3>
                <div className="quantity-box">
                  <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                  <input type="number" id="1" placeholder="1" />
                  <button type="button" className="add"><i className="fa fa-plus"></i></button>
                </div>
              </div>

              <div className="product-details__buttons">
                <div className="product-details__buttons-1">
                  <Link href="shop-cart" className="theme-btn btn-style-one"><span className="btn-title">Add to Cart</span></Link>
                </div>
                <div className="product-details__buttons-2">
                  <Link href="shop-product-details" className="theme-btn btn-style-one"><span className="btn-title">Add to Wishlist</span></Link>
                </div>
              </div>
              <div className="product-details__social">
                <div className="title"><h3>Share with friends</h3></div>
                <ul className="social-icon-one">
                  <li><Link href="#"><i className="fab fa-x-twitter"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details End */}

      {/* Product Description Start  */}
      <section className="product-description">
        <div className="container pt-0 pb-90">
          <div className="product-discription">
            <div className="tabs-box">
              <div className="tab-btn-box text-center">
                <ul className="tab-btns tab-buttons clearfix">
                  <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Description</li>
                  <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Reviews</li>
                </ul>
              </div>
              <div className="tabs-content">
                <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                  <div className="text">
                    <h3 className="product-description__title">Description</h3>
                    <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                      phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have
                      alteration in some injected or words which don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the
                      middle of text.
                    </p>
                    <div className="product-description__list">
                      <ul className="list-unstyled">
                        <li>
                          <p><span className="fa fa-arrow-right"></span> Nam at elit nec neque suscipit gravida.</p>
                        </li>
                        <li>
                          <p><span className="fa fa-arrow-right"></span> Aenean egestas orci eu maximus tincidunt.</p>
                        </li>
                        <li>
                          <p><span className="fa fa-arrow-right"></span> Curabitur vel turpis id tellus cursus laoreet.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                      predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                      dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. 
                    </p>
                  </div>
                </div>
                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                  <div className="customer-comment">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                        <div className="single-comment-box">
                          <div className="inner-box">
                            <figure className="comment-thumb"><img src="/images/resource/testi-2.jpg" alt=""/></figure>
                            <div className="inner">
                              <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                              </ul>
                              <h5>Jon D. William, <span>20 Sep, 2022 . 4:00 pm</span></h5>
                              <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                        <div className="single-comment-box">
                          <div className="inner-box">
                            <figure className="comment-thumb"><img src="/images/resource/testi-1.jpg" alt=""/></figure>
                            <div className="inner">
                              <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                              </ul>
                              <h5>Aleesha Brown, <span>22 Sep, 2022 . 8:00 pm</span></h5>
                              <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box">
                    <h3>Add Your Comments</h3>
                    <form id="contact_form" name="contact_form" className="" action="" method="post">
                      <div className="mb-3">
                        <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 column">
                        <div className="review-box clearfix">
                          <p>Your Review</p>
                          <ul className="rating clearfix">
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 column">
                        <div className="form-group clearfix">
                          <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                              <input type="checkbox" className="material-control-input"/>
                              <span className="material-control-indicator"></span>
                              <span className="description"> Save my name, email, and website in this browser for the next time I comment.</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <input name="form_botcheck" className="form-control" type="hidden" defaultValue="" />
                        <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Submit Comment</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Description End  */}

      <section className="related-product">
        <div className="container pt-0 pb-90">
          <h3>Related Products</h3>
          <div className="row">
            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image"><Link href="shop-product-details"><img src="/images/resource/products/1.jpg" alt=""/></Link></div>
                  <div className="icon-box">
                    <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                    <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                  </div>
                </div>
                <div className="content">
                  <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                  <h4><Link href="shop-product-details">Tablets Pack</Link></h4>
                  <span className="price">$23.00</span>
                </div>
              </div>
            </div>

            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image"><Link href="shop-product-details"><img src="/images/resource/products/2.jpg" alt=""/></Link></div>
                  <div className="icon-box">
                    <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                    <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                  </div>
                </div>
                <div className="content">
                  <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                      className="fa fa-star"></i><i className="fa fa-star"></i></span>
                  <h4><Link href="shop-product-details">CBD Oil Bottle</Link></h4>
                  <span className="price">$23.00</span>
                </div>
              </div>
            </div>

            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image"><Link href="shop-product-details"><img src="/images/resource/products/3.jpg" alt=""/></Link></div>
                  <div className="icon-box">
                    <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                    <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                  </div>
                </div>
                <div className="content">
                  <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                      className="fa fa-star"></i><i className="fa fa-star"></i></span>
                  <h4><Link href="shop-product-details">Fredddy Fuego</Link></h4>
                  <span className="price">$23.00</span>
                </div>
              </div>
            </div>

            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image"><Link href="shop-product-details"><img src="/images/resource/products/4.jpg" alt=""/></Link></div>
                  <div className="icon-box">
                    <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                    <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                  </div>
                </div>
                <div className="content">
                  <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                      className="fa fa-star"></i><i className="fa fa-star"></i></span>
                  <h4><Link href="shop-product-details">Healthy Tab</Link></h4>
                  <span className="price">$23.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section alternate">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="title-column col-xl-6">
                <div className="inner-column">
                  <h2 className="title">Subscribe for any update information</h2>
                </div>
              </div>
              <div className="form-column col-xl-6">
                <div className="newsletter-form">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input type="email" name="email" className="email" placeholder="Type email id" required=""/>
                      <button type="button" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Submit</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default ShopDetails

import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Video1 = ({ data }) => {
    const [isOpen, setOpen] = useState(false);
    const { video } = data;
    
    return (
        <>
        <section className="video-section">
          <div 
            className="bg bg-image" 
            style={{ backgroundImage: `url(${video.bgImage})` }}
          ></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title mb-0">
                  <h2 className="words-slide-up text-split">{video.title}</h2>
                  <Link 
                    href={video.button.link} 
                    className="theme-btn btn-style-two btn pricing-btn"
                  >
                    <span className="btn-title">{video.button.text}</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="outer-box">
                  <h4>{video.videoElement.title}</h4>
                  <a onClick={() => setOpen(true)} className="play-now">
                    <i className="icon fas fa-play p-0" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo 
          channel='youtube' 
          autoplay 
          isOpen={isOpen} 
          videoId={video.videoElement.videoId} 
          onClose={() => setOpen(false)} 
        />
        </>
    );
};

export default Video1;

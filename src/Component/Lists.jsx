import React from 'react';

const Gallery = () => {
  return (
    <section className="adv-gallery cd-padding-y-xl">
      <div className="adv-gallery__grid">
        <div>
          <img className="adv-gallery__img" src="./nostra2.jpg" alt="" />
        </div>

        <div>
          <img className="adv-gallery__img" src="./nostra3.jpg" alt="" />
        </div>

        <div>
          <img className="adv-gallery__img" src="./nostra4.jpg" alt="" />
        </div>

        <div className="adv-gallery__label">
          <div className="adv-gallery__label-inner">
            <div className="adv-gallery__label-line" aria-hidden="true"></div>
            <p className="adv-gallery__label-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

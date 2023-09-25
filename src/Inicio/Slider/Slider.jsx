/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import './Slider.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const imgs = [
  {
    src: 'https://i.pinimg.com/736x/8d/76/b7/8d76b7681c9ed60d735b885e22a243e9.jpg',
    srcMovil: 'https://i.pinimg.com/736x/8d/76/b7/8d76b7681c9ed60d735b885e22a243e9.jpg',
    alt: 'sliderImg',
    key: '1',
  },
  {
    src: 'https://www.pccmarkets.com/wp-content/uploads/2019/02/st-organic-produce-baskets-1600.jpg',
    srcMovil: 'https://www.pccmarkets.com/wp-content/uploads/2019/02/st-organic-produce-baskets-1600.jpg',
    alt: 'sliderImg',
    key: '2',
  },
  {
    src: 'https://gillco.com/wp-content/uploads/2022/07/Organic-Food-Basket-min.jpg',
    srcMovil: 'https://gillco.com/wp-content/uploads/2022/07/Organic-Food-Basket-min.jpg',
    alt: 'sliderImg',
    key: '3',
  },
  {
    src: 'https://wallpapercave.com/wp/wp2332987.jpg',
    srcMovil: 'https://wallpapercave.com/wp/wp2332987.jpg',
    alt: 'sliderImg',
    key: '4',
  },
  {
    src: 'https://gillco.com/wp-content/uploads/2022/07/Organic-Food-Basket-min.jpg',
    srcMovil: 'https://gillco.com/wp-content/uploads/2022/07/Organic-Food-Basket-min.jpg',
    alt: 'sliderImg',
    key: '5',
  },
  {
    src: 'https://wallpapercave.com/wp/wp2332987.jpg',
    srcMovil: 'https://wallpapercave.com/wp/wp2332987.jpg',
    alt: 'sliderImg',
    key: '6',
  },
];

function Slider() {
  const [viewImg, setViewImg] = useState(1);

  const next = () => {
    if (viewImg === imgs.length) setViewImg(1);
    else setViewImg(viewImg + 1);
  };

  const prev = () => {
    if (viewImg === 1) setViewImg(imgs.length);
    else setViewImg(viewImg - 1);
  };

  const changeImg = (num) => {
    setViewImg(Number(num));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [viewImg]);

  return (
    <div className="Slider">
      {imgs.map((img) => {
        if (viewImg === Number(img.key)) {
          return (
            <div className="divImg" key={img.key}>
              <picture>
                <source media="(max-width: 1000px)" srcSet={img.srcMovil} />
                <img
                  className="imgSlider "
                  src={img.src}
                  alt={img.alt}
                  decoding="async"
                />
              </picture>
            </div>
          );
        }
      })}
      <button type="button" className="prev arrowBtn pointer arrowBtnLeft" onClick={prev}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
      <button type="button" className="next arrowBtn pointer arrowBtnRigth" onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </button>
      <div className="elements">
        {imgs.map((img) => (
          <button
            type="button"
            key={img.key}
            className={`quadrate pointer ${viewImg === Number(img.key) && 'quadrateView'}`}
            onClick={() => changeImg(img.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

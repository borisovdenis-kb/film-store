import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel(props) {
  const [offsetIndex, setOffsetIndex] = useState(0);

  function goForward() {
    if (!isForwardDisabled()) {
      setOffsetIndex(offsetIndex - 1);
    }
  }

  function goBack() {
    if (!isBackDisabled()) {
      setOffsetIndex(offsetIndex + 1);
    }
  }

  function isForwardDisabled() {
    const {visibleAmount} = props;

    return offsetIndex === (props.children.length - visibleAmount) * -1;
  }

  function isBackDisabled() {
    return offsetIndex === 0;
  }

  function getCarouselContentStyle() {
    const {itemWidth, itemHeight, visibleAmount} = props;
    const carouselContentWidth = itemWidth * visibleAmount;

    return {
      width: `${carouselContentWidth || 500}px`,
      height: `${itemHeight || 100}px`
    };
  }

  function getCarouselMovableStyle() {
    const {itemWidth} = props;

    return {
      transform: `translateX(${itemWidth * offsetIndex}px)`
    };
  }

  return (
    <div className="carousel">
      <div className="carousel__btn-container" onClick={goBack}>
        {!isBackDisabled()
        && <div className="carousel__btn carousel__btn--back"/>
        }
      </div>
      <div className="carousel__content" style={getCarouselContentStyle()}>
        <div className="carousel__content--movable" style={getCarouselMovableStyle()}>
          {props.children}
        </div>
      </div>
      <div className="carousel__btn-container" onClick={goForward}>
        {!isForwardDisabled()
        && <div className="carousel__btn carousel__btn--forward"/>
        }
      </div>
    </div>
  );
}

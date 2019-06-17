import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component { // HOC ?
  constructor(props) {
    super(props);

    this.state = {
      offsetIndex: 0
    }
  }

  goForward = () => {
    if (!this.isForwardDisabled()) {
      this.setState(prevState => ({offsetIndex: prevState.offsetIndex - 1}));
    }
  };

  goBack = () => {
    if (!this.isBackDisabled()) {
      this.setState(prevState => ({offsetIndex: prevState.offsetIndex + 1}));
    }
  };

  isForwardDisabled = () => {
    const {visibleAmount} = this.props;

    return this.state.offsetIndex === (this.props.children.length - visibleAmount) * -1;
  };

  isBackDisabled = () => {
    return this.state.offsetIndex === 0;
  };

  getCarouselContentStyle = () => {
    const {itemWidth, itemHeight, visibleAmount} = this.props;
    const carouselContentWidth = itemWidth * visibleAmount;

    return {
      width: `${carouselContentWidth || 500}px`,
      height: `${itemHeight || 100}px`
    };
  };

  getCarouselMovableStyle = () => {
    const {itemWidth} = this.props;

    return {
      transform: `translateX(${itemWidth * this.state.offsetIndex}px)`
    };
  };

  render() {
    // если итоговое кол-во item <= чем visibleAmount, то не отображать кнопки назад/вперед

    return (
      <div className="carousel">
        <div className="carousel__btn-container" onClick={this.goBack}>
          {!this.isBackDisabled()
            && <div className="carousel__btn carousel__btn--back"></div>
          }
        </div>
        <div className="carousel__content" style={this.getCarouselContentStyle()}>
          <div className="carousel__content--movable" style={this.getCarouselMovableStyle()}>
            {this.props.children}
          </div>
        </div>
        <div className="carousel__btn-container" onClick={this.goForward}>
          {!this.isForwardDisabled()
            && <div className="carousel__btn carousel__btn--forward"></div>
          }
        </div>
      </div>
    );
  }
}

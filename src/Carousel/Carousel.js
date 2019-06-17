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
    this.setState(prevState => ({offsetIndex: prevState.offsetIndex - 1}));
  };

  goBack = () => {
    this.setState(prevState => ({offsetIndex: prevState.offsetIndex + 1}));
  };

  render() {
    const carouselContentWidth = this.props.itemWidth * this.props.visibleAmount;

    const carouselContentStyle = {
      width: `${carouselContentWidth || 500}px`,
      height: `${this.props.itemHeight || 100}px`
    };

    const carouselMovableStyle = {
      transform: `translateX(${this.props.itemWidth * this.state.offsetIndex}px)`
    };

    // если итоговое кол-во item <= чем visibleAmount, то не отображать кнопки назад/вперед

    return (
      <div className="carousel">
        <div className="carousel__btn-container" onClick={this.goBack}>
          <div className="carousel__btn carousel__btn--back">
          </div>
        </div>
        <div className="carousel__content" style={carouselContentStyle}>
          <div className="carousel__content--movable" style={carouselMovableStyle}>
            {this.props.children}
          </div>
        </div>
        <div className="carousel__btn-container" onClick={this.goForward}>
          <div className="carousel__btn carousel__btn--forward">
          </div>
        </div>
      </div>
    );
  }
}

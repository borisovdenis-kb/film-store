import React from 'react';
import classNames from 'classnames';
import { FilmShortInfo } from "../FilmShortInfo/FilmShortInfo";
import { animate, timing } from "../../services/animation";
import PropTypes from 'prop-types';
import './AutoCarousel.css';

const ANIMATION_DURATION = 10000;
const PROGRESS_ITEMS_COUNT = 5;

const ProgressItem = React.memo(function ProgressItem({item, isFocused, carouselIndex, itemIndex}) {
  const progressBarClasses = classNames({
    'auto-carousel__progress-bar': true,
    'auto-carousel__progress-bar-animation': itemIndex === carouselIndex,
    'auto-carousel__progress-bar--completed': itemIndex < carouselIndex,
    'auto-carousel__progress-bar--focused': isFocused
  });

  return (
    <div className="auto-carousel__progress-item">
      <div className="auto-carousel__progress-bar-container">
        <div className={progressBarClasses} />
      </div>
      <FilmShortInfo {...item} isFocused={isFocused}/>
    </div>
  );
});

export class AutoCarousel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offsetIndex: PROGRESS_ITEMS_COUNT - 1,
    };
    this.widthNumber = props.width.match(/\d+/)[0];
  }

  componentDidMount() {
    animate({ // TODO: возможно будет баг если мы закроем этот компонент у нас будет бесконечная анимация
      duration: ANIMATION_DURATION * PROGRESS_ITEMS_COUNT,
      timingFn: timing.linear,
      animationFn: this.next,
      isInfinite: true,
      steps: PROGRESS_ITEMS_COUNT
    });
  }

  next = () => {
    const itemsLength = this.props.items.length;

    this.setState(state => ({
      offsetIndex: (state.offsetIndex + 1) % itemsLength
    }));
  };

  getTranslateStyle = () => {
    return {
      transform: `translateX(-${this.widthNumber * this.state.offsetIndex}px)`
    };
  };

  render() {
    const {width, height} = this.props;
    const {offsetIndex} = this.state;

    const sizeStyle = {
      width: width,
      height: height
    };

    const getItemStyle = (url) => ({
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      ...sizeStyle
    });

    return (
      <div className="auto-carousel" style={sizeStyle}>
        <div className="auto-carousel__progress">
          <div className="auto-carousel__progress-bottom">
            {this.props.items.map((item, index) => (
              <ProgressItem item={item}
                            itemIndex={index}
                            carouselIndex={this.state.offsetIndex}
                            isFocused={offsetIndex === index}
                            key={item.id}
              />
            ))}
          </div>
        </div>
        <div className="auto-carousel__items-container">
          <div className="auto-carousel__items-container--movable" style={this.getTranslateStyle()}>
            {this.props.items.map(item => (
              <div className="auto-carousel__item" style={getItemStyle(item.posterUrl)} key={item.id}>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

AutoCarousel.defaultProps = {
  width: '200px',
  height: '200px'
};

AutoCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

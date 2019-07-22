import React from 'react';
import classNames from 'classnames';
import {FilmShortInfo} from "../FilmShortInfo/FilmShortInfo";
import PropTypes from 'prop-types';
import './AutoCarousel.css';

function ProgressItem({item, width, isFocused}) {
  const progressBarClasses = classNames({
    'auto-carousel__progress-bar': true,
    'auto-carousel__progress-bar--focused': isFocused
  });

  return (
    <div className="auto-carousel__progress-item">
      <div className="auto-carousel__progress-bar-container">
        <div className={progressBarClasses} style={{width: width}} />
      </div>
      <FilmShortInfo {...item} isFocused={isFocused}/>
    </div>
  );
}

export class AutoCarousel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offsetIndex: 0,
      progressItems: []
    };

    this.intervalsIds = {
      next: null,
      updateProgressBars: null
    };
  }

  componentDidMount() {
    this.intervalsIds.updateProgressBars = setInterval(this.updateProgressBars, 100);
    this.intervalsIds.next = setInterval(this.next, 10000);

    this.resetProgressBars();
  }

  componentWillUnmount() {
    clearInterval(this.intervalsIds.next);
    clearInterval(this.intervalsIds.updateProgressBars);
  }

  next = () => {
    const itemsLength = this.props.items.length;

    this.setState(state => ({
      offsetIndex: (state.offsetIndex + 1) % itemsLength
    }));

    if (this.state.offsetIndex === 0) {
      this.resetProgressBars();
    }
  };

  updateProgressBars = () => {
    this.setState(state => ({
      progressItems: state.progressItems.map((item, index) => {
        if (index === state.offsetIndex) {
          return item + (150 / 100);
        }

        return item;
      })
    }));
  };

  resetProgressBars = () => {
    this.setState({
      progressItems: this.props.items.map(item => 0)
    });
  };

  getTranslateStyle = () => {
    return {
      transform: `translateX(-${this.props.width * this.state.offsetIndex}px)`
    };
  };

  render() {
    const {width, height} = this.props;
    const {progressItems, offsetIndex} = this.state;

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
                            width={progressItems[index]}
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

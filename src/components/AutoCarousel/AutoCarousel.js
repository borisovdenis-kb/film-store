import React from 'react';
import classNames from 'classnames';
import './AutoCarousel.css';
import {FilmShortInfo} from "../FilmShortInfo/FilmShortInfo";

function ProgressItem({item, width, isFocused}) {
  const progressBarClasses = classNames({
    'auto-carousel__progress-bar': true,
    'auto-carousel__progress-bar--focused': isFocused
  });

  return (
    <div className="auto-carousel__progress-item" key={item.id}>
      <div className="auto-carousel__progress-bar-container">
        <div className={progressBarClasses} style={{width: width}} />
      </div>
      <FilmShortInfo {...item} isFocused={isFocused}/>
    </div>
  );
}

export class AutoCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetIndex: 0,
      itemsProgressBars: []
    };

    this.intervalsIds = {
      next: null,
      updateProgressBars: null
    };
  }

  componentDidMount() {
    this.intervalsIds.next = setInterval(this.next, 10000);
    this.intervalsIds.updateProgressBars = setInterval(this.updateProgressBars, 100);

    this.setState({
      itemsProgressBars: this.props.items.map(item => 0)
    });
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
      itemsProgressBars: state.itemsProgressBars.map((item, index) => {
        if (index === state.offsetIndex) {
          return item + (150 / 100);
        }

        return item;
      })
    }));
  };

  resetProgressBars = () => {
    this.setState({
      itemsProgressBars: this.props.items.map(item => 0)
    });
  };

  getTranslateStyle = () => {
    return {
      transform: `translateX(-${this.props.width * this.state.offsetIndex}px)`
    };
  };

  render() {
    const {width, height} = this.props;
    const {itemsProgressBars, offsetIndex} = this.state;

    const sizeStyle = {
      width: `${width || 200}px`,
      height: `${height || 100}px`
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
                            width={itemsProgressBars[index]}
                            isFocused={offsetIndex === index}
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

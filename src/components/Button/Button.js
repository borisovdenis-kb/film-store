import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    const {title, width, height, onClick} = this.props;
    const styles = {
      width: `${width || 150}px`,
      height: `${height || 40}px`
    };

    return (
      <div className="button"
           style={styles}
           onClick={onClick}>
        {title}
      </div>
    );
  }
}

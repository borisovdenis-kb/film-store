import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button"
           onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}

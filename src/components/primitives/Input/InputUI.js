import React from 'react';
import './InputUI.css';

export class InputUI extends React.Component {
  render() {
    const styles = {
      width: `${this.props.width || 200}px`
    };

    return (
      <div className="input-ui">
        <input className="input-ui__input"
               style={styles}
               type="text"
               name={this.props.name}
               placeholder={this.props.placeholder}
               onChange={this.props.onChange}
               value={this.props.value}
        />
        {this.props.label
          && <div className="label-ui">{this.props.label}</div>
        }
      </div>
    );
  }
}

import React from 'react';
import './InputUI.css';

export class InputUI extends React.Component {
  render() {
    const {value, name, label, onChange} = this.props;

    return (
      <div className="input-ui">
        <input className="input-ui__input"
               type="text"
               name={name}
               onChange={onChange}
               value={value}
        />
        <div className="input-ui__label">
          {label}
        </div>
      </div>
    );
  }
}

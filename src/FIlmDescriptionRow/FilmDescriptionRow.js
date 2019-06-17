import React from 'react';
import './FilmDescriptionRow.css';

export default class FilmDescriptionRow extends React.Component {
  render() {
    return (
      <div className="film-description-row">
        <div className="film-description-row__property-name">{this.props.name}</div>
        <div className="film-description-row__property-value">{this.props.value}</div>
      </div>
    );
  }
}

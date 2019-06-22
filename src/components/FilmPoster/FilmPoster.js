import React from 'react';
import './FilmPoster.css';

export default class FilmPoster extends React.Component {
  render() {
    const style = {
      width: `${this.props.width || 160}px`,
      height: `${this.props.height || 225}px`
    };

    return (
      <div className="film-poster" style={style} onClick={this.props.onClick}>
        <img className="film-poster__img" src={this.props.posterUrl} style={style}>
        </img>
      </div>
    );
  }
}

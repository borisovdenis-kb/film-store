import React from 'react';
import PropTypes from 'prop-types';
import './FilmPoster.css';

export default class FilmPoster extends React.PureComponent {
  render() {
    const style = {
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div className="film-poster" style={style} onClick={this.props.onClick}>
        <img className="film-poster__img" src={this.props.posterUrl} style={style} alt="" />
      </div>
    );
  }
}

FilmPoster.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  posterUrl: PropTypes.string,
  onClick: PropTypes.func
};

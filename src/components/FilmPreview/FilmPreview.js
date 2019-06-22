import React from 'react';
import './FilmPreview.css';
import FilmPoster from '../FilmPoster/FilmPoster';

export default class FilmPreview extends React.Component {
  openFilmPage = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div className="film-card">
        <div className="film-card__poster">
          <FilmPoster posterUrl={this.props.posterUrl} onClick={this.openFilmPage}/>
        </div>
        <div className="film-card__short-info">
          <div className="film-card__title">{this.props.title}</div>
          <div className="film-card__extra-info">
            {this.props.year}, {this.props.genres[0]}
          </div>
        </div>
      </div>
    );
  }
}

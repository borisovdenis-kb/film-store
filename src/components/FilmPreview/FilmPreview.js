import React from 'react';
import './FilmPreview.css';
import FilmPoster from '../FilmPoster/FilmPoster';
import {FilmShortInfo} from "../FilmShortInfo/FilmShortInfo";

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
        <FilmShortInfo {...this.props} />
      </div>
    );
  }
}

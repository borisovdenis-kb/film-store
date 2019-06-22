import React from 'react';
import FilmPreview from '../FilmPreview/FilmPreview';
import './FilmSearchResult.css';

export default class FilmSearchResultUI extends React.Component {
  openFilmPage = (filmId) => {
    this.props.history.push(`/films/${filmId}`);
  };

  render() {
    return (
      <div className="film-search-result">
        {this.props.films.map((row, index) => (
          <div className="film-search-result__row" key={index}>
            {row.map(film => (
              <div className="film-search-result__card-container" key={film.id}>
                <FilmPreview {...film} onClick={this.openFilmPage}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

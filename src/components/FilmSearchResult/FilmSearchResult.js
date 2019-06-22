import React from 'react';
import FilmPreview from '../FilmPreview/FilmPreview';
import './FilmSearchResult.css';
import { connect } from 'react-redux';
import _ from "lodash";

class FilmSearchResultUI extends React.Component {
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

export const FilmSearchResult = connect(
  (state) => ({
      films: _.chunk(state.films, 6)
  })
)(FilmSearchResultUI);

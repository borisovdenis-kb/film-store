import React from 'react';
import FilmPreview from '../FilmPreview/FilmPreview';
import './FilmSearchResult.css';
import { connect } from 'react-redux';
import { loadFilms, loadFilmsOfTheDay } from "../../store";
import {AutoCarousel} from "../AutoCarousel/AutoCarousel";

class FilmSearchResultUI extends React.Component {
  openFilmPage = (filmId) => {
    this.props.history.push(`/films/${filmId}`);
  };

  componentDidMount() {
    if (!this.props.films.length) {
      this.props.dispatch(loadFilms());
    }

    if (!this.props.filmsOfTheDay.length) {
      this.props.dispatch(loadFilmsOfTheDay());
    }
  }

  render() {
    return (
      <div className="film-search-result">
        {Boolean(this.props.filmsOfTheDay.length) && <AutoCarousel items={this.props.filmsOfTheDay} width="1060px" height="420px" />}
        <div className="film-search-result__content">
          {this.props.films.map(film => (
            <div className="film-search-result__card-container" key={film.id}>
              <FilmPreview film={film} onClick={this.openFilmPage} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export const FilmSearchResult = connect(
  (state) => ({
    films: state.films,
    filmsOfTheDay: state.filmsOfTheDay
  })
)(FilmSearchResultUI);

import React from 'react';
import FilmPreview from '../FilmPreview/FilmPreview';
import _ from 'lodash';
import { getFilms } from "../services/FilmApi";
import './FilmSearchResult.css';

export default class FilmSearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     films: []
    };
  }

  openFilmPage = (filmId) => {
    this.props.history.push(`/films/${filmId}`);
  };

  componentDidMount() {
    getFilms()
      .then(result => {
        this.setState({films: _.chunk(result, 6)});
      });
  }

  render() {
    return (
      <div className="film-search-result">
        {this.state.films.map((row, index) => (
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

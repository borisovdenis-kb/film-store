import React from 'react';
import FilmPreview from '../FilmPreview/FilmPreview';
import './FilmSearchResult.css';
import { connect } from 'react-redux';
import {loadFilms} from "../../store";
import {AutoCarousel} from "../AutoCarousel/AutoCarousel";

const films = [
  {
    id: 1,
    title: "Once upon a time in Hollywood...",
    year: 2019,
    genres: ["Crime", "Drama"],
    director: ["Quentin Tarantino"],
    posterUrl: "https://avatars.mds.yandex.net/get-kinopoisk-blog-post-thumb/28671/4f9e57fb9c34230e0226dab7379a9004/orig"},
  {
    id: 8,
    title: "Memento",
    year: 2000,
    genres: ["Mystery", "Thriller"],
    director: ["Christopher Nolan"],
    posterUrl: "https://cinemaplanet.pt/wp-content/uploads/2017/03/40112433-memento-wallpapers.jpg"
  },
  {
    id: 26,
    title: "The Silence of the Lambs",
    year: 1991,
    genres: ["Thriller", "Crime", "Drama"],
    director: ["Jonathan Demme"],
    posterUrl: "https://www.filmnod.com/media/picture/t/the-silence-of-the-lambs-1991.jpg"
  },
  {
    id: 37,
    title: "The Shining",
    year: 1980,
    genres: ["Drama", "Horror"],
    director: ["Stanley Kubrick"],
    posterUrl: "https://content.propstore.com/auction/la2018/listings/82093/img14.jpg"
  },
  {
    id: 71,
    title: "American History X",
    year: 1998,
    genres: ["Crime", "Drama"],
    director: ["Tony Kaye"],
    posterUrl: "http://mediabrest.by/editor_files/images/images/news/Amerikanskaja-istorija-X"
  },
];

class FilmSearchResultUI extends React.Component {
  openFilmPage = (filmId) => {
    this.props.history.push(`/films/${filmId}`);
  };

  componentDidMount() {
    if (!this.props.films.length) {
      this.props.dispatch(loadFilms());
    }
  }

  render() {
    return (
      <div className="film-search-result">
        <AutoCarousel items={films} width="1060px" height="420px" />
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
      films: state.films
  })
)(FilmSearchResultUI);

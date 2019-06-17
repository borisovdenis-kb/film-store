import React from 'react';
import FilmPoster from "../FilmPoster/FilmPoster";
import FilmDescriptionRow from "../FIlmDescriptionRow/FilmDescriptionRow";
import FilmActorList from "../FilmActorList/FilmActorList";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import _ from 'lodash';
import { getFilms, getFilmById } from "../services/FilmApi";
import './FilmPage.css';
import FilmPreview from "../FilmPreview/FilmPreview";

export default class FilmPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmData: {},
      similarFilms: []
    };
  }

  prepareActorList = actorList => {
    if (!actorList) {
      return [];
    }

    return _.map(actorList.split(','), _.trim);
  };

  componentDidMount() {
    const filmId = this.props.match.params.id;

    getFilmById(filmId)
      .then(result => {
        this.setState({filmData: result});

        return getFilms();
      })
      .then(result => {
        this.setState({similarFilms: result});
      });
  }

  render() {
    const actorList = this.prepareActorList(this.state.filmData.actors);
    const directorStr = _.get(this.state, 'filmData.director', []).join(', ');
    const genresStr = _.get(this.state, 'filmData.genres', []).join(', ');

    return (
      <div className="film-page">
        <div className="film-page__title">
          {this.state.filmData.title}
        </div>

        <div className="film-page__description-container">
          <div className="film-page__poster-container">
            <FilmPoster posterUrl={this.state.filmData.posterUrl} width="280" height="405"/>
            <div className="film-page__sale-block">
              <Button title="Buy" />
            </div>
          </div>
          <div className="film-page__full-info">
            <FilmDescriptionRow name="Year" value={this.state.filmData.year} />
            <FilmDescriptionRow name="Director" value={directorStr} />
            <FilmDescriptionRow name="Genres" value={genresStr} />
            <FilmDescriptionRow name="Rating" value={this.state.filmData.rating} />
            <FilmDescriptionRow name="Runtime" value={this.state.filmData.runtime + ' m.'} />
            <FilmDescriptionRow name="Plot" value={this.state.filmData.plot} />
          </div>
          <div className="film-page__actor-list">
            <FilmActorList actorList={actorList}/>
          </div>
        </div>

        {this.state.similarFilms.length && (
          <div className="film-page__similar-films">
            <Carousel itemWidth="180" itemHeight="270" visibleAmount={5}>
              {this.state.similarFilms.map(film => (
                <div className="film-page__film-preview-container" key={film.id}>
                  <FilmPreview {...film}/>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    );
  }
}

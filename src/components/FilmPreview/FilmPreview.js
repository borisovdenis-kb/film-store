import React from 'react';
import FilmPoster from '../FilmPoster/FilmPoster';
import {FilmShortInfo} from "../FilmShortInfo/FilmShortInfo";
import PropTypes from 'prop-types';
import './FilmPreview.css';

export default class FilmPreview extends React.PureComponent {
  openFilmPage = () => {
    this.props.onClick(this.props.film.id);
  };

  render() {
    const styles = {width: this.props.posterSize.width};
    const {width, height} = this.props.posterSize;

    return (
      <div className="film-preview" style={styles}>
        <div className="film-card__poster">
          <FilmPoster posterUrl={this.props.film.posterUrl}
                      width={width}
                      height={height}
                      onClick={this.openFilmPage}
          />
        </div>
        <FilmShortInfo {...this.props.film} />
      </div>
    );
  }
}

FilmPreview.defaultProps = {
  posterSize: {
    width: '160px',
    height: '225px'
  }
};

FilmPreview.propTypes = {
  film: PropTypes.object,
  posterSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  }),
  onClick: PropTypes.func
};

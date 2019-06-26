import React from 'react';
import classNames from 'classnames';
import './FilmShortInfo.css';

export function FilmShortInfo({title, year, genres, isFocused}) {
  const classes = classNames({
    'film-short-info': true,
    'film-short-info--focused': isFocused
  });

  return (
    <div className={classes}>
      <div className="film-short-info__title">{title}</div>
      <div className="film-short-info__extra-info">
        {year}, {genres[0]}
      </div>
    </div>
  );
}

import React from 'react';
import './FilmActorList.css';

export default class FilmActorList extends React.Component {
  render() {
    return (
      <div className="film-actor-list">
        <div className="film-actor-list__header">
          Cast
        </div>
        <div className="film-actor-list__actors">
          {this.props.actorList.map(actorName => (
            <div className="film-actor-list__actor-name"
                 key={actorName}>
              {actorName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

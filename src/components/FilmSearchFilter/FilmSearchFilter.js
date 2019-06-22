import React from 'react';
import './FilmSearchFilter.css';
import {InputUI} from "../Input/InputUI";
import {connect} from 'react-redux';
import FilmSearchResultUI from './FilmSearchFilter';
import Button from "../Button/Button";

export default class FilmSearchFilterUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        rating: null
      }
    };
  }

  onInputsChange = ({target}) => {
    this.setState((state) => ({
      ...state.filter, [target.name]: target.value
    }));
  };

  render() {
    return (
      <div className="film-search-filter">
        <InputUI label="rating" name="rating" value={this.state.rating} onChange={this.onInputsChange}/>
        <Button title="Accept" />
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  filter: state.filter
});

export const FilmSearchFilter = connect(mapStatesToProps)(FilmSearchResultUI);

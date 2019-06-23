import React from 'react';
import './FilmSearchFilter.css';
import Button from "../Button/Button";
import {connect} from 'react-redux';
import {InputUI} from "../Input/InputUI";
import { setFilter } from "../../store";

class FilmSearchFilterUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        rating: null,
        year: null
      }
    }; // TODO: теперь вопрос как этот правильно синхронизировать со стором
  }

  onInputsChange = ({target}) => {
    this.setState((state) => {
      return {
        filter: {
          ...state.filter,
          [target.name]: target.value
        }
      };
    });
  };

  onFilterClick = () => {
    this.props.dispatch(setFilter(this.state.filter));
  };

  render() {
    return (
      <div className="film-search-filter">
        <div className="film-search-filter__inputs">
          <div className="film-search-filter__input">
            <InputUI label="lowest rating"
                     name="rating"
                     value={this.state.rating}
                     onChange={this.onInputsChange}
            />
          </div>
          <InputUI className="film-search-filter__input"
                   label="start year"
                   name="year"
                   value={this.state.year}
                   onChange={this.onInputsChange}
          />
        </div>
        <div className="film-search-filter__button">
          <Button title="Filter" width="75" height="30" onClick={this.onFilterClick}/>
        </div>
      </div>
    );
  }
}

export const FilmSearchFilter = connect(
  (state) => ({
    filter: state.filter
  })
)(FilmSearchFilterUI);

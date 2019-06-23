import React from 'react';
import Button from "../Button/Button";
import {connect} from 'react-redux';
import {InputUI} from "../Input/InputUI";
import {setFilms, setFilter} from "../../store";
import './FilmSearchFilter.css';
import {getFilms} from "../../services/FilmApi";
import {withRouter} from "react-router-dom";

class FilmSearchFilterUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        director: '',
        rating: '',
        year: ''
      }
    }; // TODO: теперь вопрос как этот правильно синхронизировать со стором
  }

  componentDidMount() {
    this.setState({filter: this.props.filter});
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
    this.props.setFilter(this.state.filter);

    this.applyFilter();
  };

  applyFilter() {
    const {filter} = this.props;
    const params = {
      director_like: filter.director,
      year_gte: filter.year,
      rating_gte: filter.rating
    };

    getFilms(params)
      .then(result => {
        this.props.setFilms(result);

        this.props.history.push('/films');
      });
  }

  render() {
    return (
      <div className="film-search-filter">
        <div className="film-search-filter__inputs">
          <div className="film-search-filter__input">
            <InputUI label="lowest rating"
                     name="rating"
                     value={this.state.filter.rating}
                     onChange={this.onInputsChange}
            />
          </div>
          <div className="film-search-filter__input">
            <InputUI className="film-search-filter__input"
                     label="start year"
                     name="year"
                     value={this.state.filter.year}
                     onChange={this.onInputsChange}
            />
          </div>
          <InputUI className="film-search-filter__input"
                   label="director"
                   name="director"
                   value={this.state.filter.director}
                   onChange={this.onInputsChange}
          />
        </div>
        <div className="film-search-filter__button">
          <Button title="Search" width="75" height="30" onClick={this.onFilterClick}/>
        </div>
      </div>
    );
  }
}

export const FilmSearchFilter = withRouter(
  connect(
    (state) => ({
      filter: state.filter
    }),
    (dispatch) => ({
      setFilms: (films) => dispatch(setFilms(films)),
      setFilter: (filter) => dispatch(setFilter(filter))
    })
  )(FilmSearchFilterUI)
);

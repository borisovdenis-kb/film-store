import React from 'react';
import Button from "../primitives/Button/Button";
import {connect} from 'react-redux';
import {InputUI} from "../primitives/Input/InputUI";
import {setFilms, setFilter} from "../../store";
import './FilmSearchFilter.css';
import {getFilms} from "../../services/FilmApi";
import {withRouter} from "react-router-dom";
import {PeriodUI} from "../primitives/Period/PeriodUI";
import {store} from "../../store";

class FilmSearchFilterUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        director: '',
        rating: '',
        year: {
          start: '',
          end: ''
        }
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

  onPeriodsChange = ({name, start, end}) => {
    this.setState((state) => {
      return {
        filter: {
          ...state.filter,
          [name]: {start, end}
        }
      };
    });
  };

  onFilterClick = () => {
    this.props.setFilter(this.state.filter);

    this.applyFilter();
  };

  applyFilter() {
    const {filter} = store.getState();
    const params = {
      director_like: filter.director,
      year_gte: filter.year.start,
      year_lte: filter.year.end,
      rating_gte: filter.rating
    };

    console.log(params);

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
            <InputUI label="Lowest rating"
                     name="rating"
                     placeholder="rating"
                     value={this.state.filter.rating}
                     onChange={this.onInputsChange}
            />
          </div>
          <div className="film-search-filter__input">
            <PeriodUI label="Years period"
                      name="year"
                      start={this.state.filter.year.start}
                      end={this.state.filter.year.end}
                      onChange={this.onPeriodsChange}
            />
          </div>
          <InputUI label="Director"
                   name="director"
                   placeholder="Director"
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

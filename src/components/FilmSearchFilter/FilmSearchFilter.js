import React from 'react';
import Button from "../primitives/Button/Button";
import {connect} from 'react-redux';
import {loadFilms, setFilter} from "../../store";
import './FilmSearchFilter.css';
import {getDirectors} from "../../services/DirectorApi";
import {withRouter} from "react-router-dom";
import {PeriodUI} from "../primitives/Period/PeriodUI";
import {store} from "../../store";
import {SelectUI} from "../primitives/Select/SelectUI";

class FilmSearchFilterUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      directors: [],
      filter: {
        director: {},
        rating: {
          start: '',
          end: ''
        },
        year: {
          start: '',
          end: ''
        }
      }
    };
  }

  componentDidMount() {
    this.loadDirectors()
      .then(directors => this.setState({directors, filter: this.props.filter}));
  }

  onPeriodsChange = ({name, start, end}) => { // TODO: Привести к одному интерфейсу компоненты форм
    this.setState((state) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: {start, end}
        }
      };
    });
  };

  onSelectChange = ({name, value}) => {
    this.setState((state) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value
        }
      };
    });
  };

  onFilterClick = () => {
    this.props.setFilter(this.state.filter);

    this.applyFilter();
  };

  applyFilter() {
    this.props.loadFilms().then(() => {
      this.props.history.push('/films');
    });
  }

  loadDirectors = () => {
    return getDirectors();
  };

  render() {
    return (
      <div className="film-search-filter">
        <div className="film-search-filter__inputs">
          <div className="film-search-filter__input">
            <PeriodUI label="Rating"
                      name="rating"
                      start={this.state.filter.rating.start}
                      end={this.state.filter.rating.end}
                      onChange={this.onPeriodsChange}
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
          <SelectUI label="Director"
                    name="director"
                    items={this.state.directors}
                    displayKey="name"
                    trackBy="id"
                    value={this.state.filter.director}
                    onChange={this.onSelectChange}
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
    }), {
      setFilter,
      loadFilms
    }
  )(FilmSearchFilterUI)
);

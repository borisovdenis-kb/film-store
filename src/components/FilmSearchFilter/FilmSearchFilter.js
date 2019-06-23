import React from 'react';
import Button from "../primitives/Button/Button";
import {connect} from 'react-redux';
import {setFilms, setFilter} from "../../store";
import './FilmSearchFilter.css';
import {getFilms} from "../../services/FilmApi";
import {withRouter} from "react-router-dom";
import {PeriodUI} from "../primitives/Period/PeriodUI";
import {store} from "../../store";
import {SelectUI} from "../primitives/Select/SelectUI";

const directors = [
  {id: 1, name: 'Christopher Nolan'},
  {id: 2, name: 'Quentin Tarantino'},
  {id: 3, name: 'Guy Ritchie'},
  {id: 4, name: 'Alfred Hitchcock'},
  {id: 5, name: 'Martin Scorsese'},
  {id: 6, name: 'Stanley Kubrick'},
  {id: 7, name: 'Robert Zemeckis'},
  {id: 8, name: 'Darren Aronofsky'},
  {id: 9, name: 'Peter Jackson'},
  {id: 10, name: 'Woody Allen'}
];

class FilmSearchFilterUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.setState({filter: this.props.filter});
  }

  onInputsChange = ({target}) => { // TODO: совместить input и select
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

  onSelectChange = ({name, value}) => {
    this.setState((state) => {
      return {
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
    const {filter} = store.getState();
    const params = this.mapFilterToParams(filter);

    getFilms(params)
      .then(result => {
        this.props.setFilms(result);

        this.props.history.push('/films');
      });
  }

  mapFilterToParams = (filter) => ({
    director_like: filter.director.name,
    year_gte: filter.year.start,
    year_lte: filter.year.end,
    rating_gte: filter.rating.start,
    rating_lte: filter.rating.end
  });

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
                    items={directors}
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
    }),
    (dispatch) => ({
      setFilms: (films) => dispatch(setFilms(films)),
      setFilter: (filter) => dispatch(setFilter(filter))
    })
  )(FilmSearchFilterUI)
);

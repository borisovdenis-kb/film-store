import React from 'react';
import SearchButton from "../SearchButton/SearchButton";
import { icons } from "../../constants/icons";
import { getFilms } from "../../services/FilmApi";
import { store } from "../../store";
import { setFilms } from "../../store/actions";
import './FilmSearch.css';


const classNames = require('classnames');

export default class FilmSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isFocused: false
    };
  }

  componentDidMount() {
    getFilms()
      .then(result => {
        store.dispatch(setFilms(result));
      });
  }

  onChange = (e) => {
    this.setState({value: e.target.value});
  };

  onFocus = () => {
    this.setState({isFocused: true});
  };

  onBlur = () => {
    this.setState({isFocused: false});
  };

  onClearValueClick = () => {
    this.setState({value: ''});
  };

  render() {
    const filmSearchInputClass = classNames({
      'film-search__input-container': true,
      'film-search__input-container--active': this.state.isFocused
    });

    return (
      <div className="film-search">
        <div className={filmSearchInputClass}>
          <input className="film-search__input" type="text"
                 value={this.state.value}
                 onChange={this.onChange}
                 onFocus={this.onFocus}
                 onBlur={this.onBlur}/>
           <div className="film-search__clear-container">
             {this.state.value && <div className="film-search__clear" onClick={this.onClearValueClick}>✖</div>}
           </div>
        </div>
        <SearchButton icon={icons.searchFilter}/>
        <SearchButton icon={icons.search}/>
      </div>
    );
  }
}

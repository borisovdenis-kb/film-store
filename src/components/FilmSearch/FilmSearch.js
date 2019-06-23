import React from 'react';
import SearchButton from "../SearchButton/SearchButton";
import { icons } from "../../constants/icons";
import { setFilterVisibility } from "../../store";
import './FilmSearch.css';
import {connect} from "react-redux";

const classNames = require('classnames');

class FilmSearchUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isFocused: false
    };
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

  toggleFilter = () => {
    this.props.dispatch(setFilterVisibility(!this.props.isFilterVisible));
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
        <SearchButton icon={icons.searchFilter} onClick={this.toggleFilter}/>
        <SearchButton icon={icons.search}/>
      </div>
    );
  }
}

export const FilmSearch = connect(
  state => ({
    filter: state.filter,
    isFilterVisible: state.isFilterVisible
  })
)(FilmSearchUI);

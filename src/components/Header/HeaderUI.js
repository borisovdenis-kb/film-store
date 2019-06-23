import React from 'react';
import Logo from '../Logo/Logo';
import {FilmSearch} from "../FilmSearch/FilmSearch";
import { FilmSearchFilter } from "../FilmSearchFilter/FilmSearchFilter";
import './Header.css';

export default class HeaderUI extends  React.Component {
  onLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="header">
        <div className="header__search-container">
          <div className="header__left">
            <Logo onClick={this.onLogoClick}/>
          </div>
          <div className="header__right">
            <FilmSearch/>
          </div>
        </div>
        {this.props.isVisible &&
          <div className="header__filter-container">
            <FilmSearchFilter />
          </div>
        }
      </div>
    );
  }
}

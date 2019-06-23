import React from 'react';
import {connect} from 'react-redux';
import Logo from '../Logo/Logo';
import {FilmSearch} from "../FilmSearch/FilmSearch";
import { FilmSearchFilter } from "../FilmSearchFilter/FilmSearchFilter";
import { withRouter } from "react-router-dom";
import './Header.css';

class HeaderUI extends  React.Component {
  onLogoClick = () => {
    this.props.history.push('/films');
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
        {this.props.isFilterVisible &&
          <div className="header__filter-container">
            <FilmSearchFilter />
          </div>
        }
      </div>
    );
  }
}

export const Header = withRouter(
  connect(
    state => ({
      isFilterVisible: state.isFilterVisible
    })
  )(HeaderUI)
);

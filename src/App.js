import React from 'react';
import FilmPage from './components/FilmPage/FilmPage';
import {FilmSearchResult} from "./components/FilmSearchResult/FilmSearchResult";
import {Route, Switch} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {connect} from 'react-redux';
import {setFilterVisibility} from "./store";
import {Home} from "./components/Home/Home";
import './App.css';
import {GlobalLoader} from "./components/GlobalLoader/GlobalLoader";

class AppUI extends React.Component {

  onClick = () => {
    this.props.dispatch(setFilterVisibility(false));
  };

  render() {
    return (
      <div className="App">
        {this.props.isLoading && <GlobalLoader />}
        <Header />
        <Route exact path="/" component={Home}/>
        <div onClick={this.onClick}>
          <div className="history-navigator" />
          <div className="content-container">
            <Switch>
              <Route exact path="/films" component={FilmSearchResult} />
              <Route path="/films/:id" component={FilmPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export const App = connect(
  (state) => ({
    isLoading: state.isLoading > 0
  })
)(AppUI);

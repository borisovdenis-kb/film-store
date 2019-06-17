import React from 'react';
import Header from './Header/Header';
import FilmSearchResult from './FilmSearchResult/FilmSearchResult';
import FilmPage from './FilmPage/FilmPage';
import {Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import './App.css';

const HeaderWithRouter = withRouter(Header);

function App() {
  return (
    <div className="App">
     <HeaderWithRouter />
     {/*<div className="history-navigator">*/}
     {/*</div>*/}
     <div className="content-container">
       <Route exact path={['/', '/films']} component={FilmSearchResult}/>
       <Route path="/films/:id" component={FilmPage}/>
     </div>
    </div>
  );
}

export default App;

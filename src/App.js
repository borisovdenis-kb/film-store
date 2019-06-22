import React from 'react';
import FilmPage from './components/FilmPage/FilmPage';
import {FilmSearchResult} from "./components/FilmSearchResult/FilmSearchResult";
import {Route, Switch} from 'react-router-dom';
import {Header} from "./components/Header/Heder";
import {withRouter} from "react-router-dom";
import './App.css';

const HeaderWithRouter = withRouter(Header);

function App() {
  return (
    <div className="App">
     <HeaderWithRouter />
     <div className="history-navigator" />
     <div className="content-container">
       <Switch>
         <Route exact path={['/', '/films']} component={FilmSearchResult}/>
         <Route path="/films/:id" component={FilmPage}/>
       </Switch>
     </div>
    </div>
  );
}

export default App;

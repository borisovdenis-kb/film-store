import React from 'react';
import {withRouter} from "react-router";
import './Home.css';

function HomeUI(props) {
  const openFilter = () => {
    props.history.push('/films');
  };

  return (
    <div className="home">
      {!props.isFilterVisible &&
        <div className="home__open-filter" onClick={openFilter}>{!props.isFilterVisible && 'Search Your Films'}</div>
      }
    </div>
  );
}

export const Home = withRouter(HomeUI);

import React from 'react';
import {setFilterVisibility} from "../../store";
import {connect} from "react-redux";
import './Home.css';

function HomeUI(props) {
  const openFilter = () => {
    props.dispatch(setFilterVisibility(true));
  };

  return (
    <div className="home">
      {!props.isFilterVisible &&
        <div className="home__open-filter" onClick={openFilter}>{!props.isFilterVisible && 'Search Your Films'}</div>
      }
    </div>
  );
}

export const Home = connect(
  (state) => ({
    isFilterVisible: state.isFilterVisible
  })
)(HomeUI);

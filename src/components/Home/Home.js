import React from 'react';
import {setFilterVisibility} from "../../store";
import {connect} from "react-redux";
import './Home.css';

function HomeUI(props) {
  const openFilter = () => {
    props.dispatch(setFilterVisibility(true));
  };

  return (
    <div className="home" onClick={openFilter}>
      <div className="home__open-filter">Search Your Film</div>
    </div>
  );
}

export const Home = connect()(HomeUI);

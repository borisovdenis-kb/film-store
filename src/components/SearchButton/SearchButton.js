import React from 'react';
import { iconSrcMap } from "../../constants/icons";
import './SearchButton.css';

export default function SearchButton(props) {
  const {icon} = props;

  return (
    <div className="search-button">
      {icon && <img className="search-button__img" src={iconSrcMap[icon]}/>}
    </div>
  );
}

import React from 'react';
import './Logo.css';

export default function Logo(props) {
  return (
    <div className="logo"
         onClick={props.onClick}>
      FilmStore
    </div>
  )
}

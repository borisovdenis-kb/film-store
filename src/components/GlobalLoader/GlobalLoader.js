import React from 'react';
import Loader from 'react-loader-spinner';
import './GlobalLoader.css';

export function GlobalLoader(props) {
  return (
    <div className="global-loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  );
}

import React from 'react';
import './LabelUI.css';

export function LabelUI(props) {
  return (
    <div className="label-ui">{props.children}</div>
  );
}

import React from 'react';
import './PeriodUI.css';
import {InputUI} from "../Input/InputUI";
import {LabelUI} from "../Label/LabelUI";
import _ from 'lodash';

export function PeriodUI(props) {
  const onInputsChange = ({target}) => {
    let value = {
      name: props.name
    };

    if (target.name === 'start') {
      props.onChange({...value, start: target.value, end: props.end});
    } else {
      props.onChange({...value, start: props.start, end: target.value});
    }
  };

  const DEFAULT_PLACEHOLDER = {
    start: 'Start',
    end: 'End'
  };

  return (
    <div className="period">
      <div className="period__inputs">
        <div className="period__input">
          <InputUI width="100"
                   name="start"
                   placeholder={_.get(props, 'placeholder.start') || DEFAULT_PLACEHOLDER.start}
                   value={props.start}
                   onChange={onInputsChange}
          />
        </div>
        <InputUI width="100"
                 name="end"
                 placeholder={_.get(props, 'placeholder.end') || DEFAULT_PLACEHOLDER.end}
                 value={props.end}
                 onChange={onInputsChange}/>
      </div>
      <LabelUI>{props.label}</LabelUI>
    </div>
  );
}

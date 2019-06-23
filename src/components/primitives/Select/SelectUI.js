import React from 'react';
import './SelectUI.css';
import {LabelUI} from "../Label/LabelUI";

function DropDown(props) {
  const {items} = props;
  const styles = {
    width: `${props.width || 200}px`
  };

  return (
    <div className="select-ui__drop-down" style={styles}>
      {items.map(item => (
        <ItemRow item={item}
                 displayKey={props.displayKey}
                 onClick={() => props.onRowClick(item)}
                 key={item[props.trackBy]}/>
      ))}
    </div>
  );
}

function ItemRow(props) {
  const {item, displayKey, onClick} = props;

  return (
    <div className="select-ui__item-row"
         onClick={onClick}>
      {item[displayKey]}
    </div>
  );
}

export class SelectUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    }
  }

  toggleSelect = () => {
    this.setState((state) => ({isOpened: !state.isOpened}));
  };

  onChange = (item) => {
    this.props.onChange({
      name: this.props.name,
      value: item
    })
  };

  onRowClick = (item) => {
    this.onChange(item);
    this.toggleSelect();
  };

  render() {
    const {displayKey} = this.props;
    const styles = {
      width: `${this.props.width || 200}px`
    };

    return (
      <div className="select-ui" style={styles}>
        <div className="select-ui__selected-container" onClick={this.toggleSelect}>
          <div className="select-ui__selected-value">
            {this.props.value[displayKey] || 'Select item'}
          </div>
          <div className="select-ui__toggle">

          </div>
        </div>
        <LabelUI>{this.props.label}</LabelUI>
        {this.state.isOpened && <DropDown {...this.props} onRowClick={this.onRowClick}/>}
      </div>
    );
  }
}

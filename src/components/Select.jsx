import React, { Component } from 'react';

class Select extends Component {
  createSelect = (options) => {
    const arrOptions = [];

    Object.entries(options).map( ([key,value]) => {
      arrOptions.push(
        <option key={key} value={key}>
          {value}
        </option>,
      );
      return key;
    });

    return arrOptions;
  };

  onChange = (event) => {

    this.setState({
      value: event.target.value
    });

  }

  render() {
    const { selected, onChange, options } = this.props;

    return (
      <select defaultValue={selected} onChange={onChange}>
        {this.createSelect(options)}
      </select>
    );
  }
}

export default Select;

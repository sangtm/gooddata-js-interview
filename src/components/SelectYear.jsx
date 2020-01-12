import React, { Component } from 'react';
import Select from './Select';

import {
  LIST_YEARS,
  DEFAULT_YEAR
} from '../config/consts';


class SelectYear extends Component {

  onChange(event) {
    const year = Number(event.target.value);
    console.log("Select year:"  + year);

    this.props.onYearChange(year);
  }

  render() {    

    return (
      <React.Fragment>        
      <Select
        selected={DEFAULT_YEAR}
        options={LIST_YEARS}
        onChange={(event) => this.onChange(event)}
      />
      </React.Fragment>
      )
  }
}

export default SelectYear;

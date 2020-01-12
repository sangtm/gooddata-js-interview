import React, { Component } from 'react';
import Select from './Select';

import {  
  DEFAULT_MONTH
} from '../config/consts';


class SelectMonth extends Component {

  onChange(event) {
    const month = Number(event.target.value);
    console.log("Select month:"  + month);

    this.props.onMonthChange(month);
  }

  render() {   

  const listMonths = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    }; 

    return (
      <React.Fragment>        
        <Select
          selected={DEFAULT_MONTH}
          options={listMonths}
          onChange={(event) => this.onChange(event)}
        />
      </React.Fragment>
    )
  }
}

export default SelectMonth;

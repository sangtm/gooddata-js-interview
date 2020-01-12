// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';
import SelectYear from './components/SelectYear';
import SelectMonth from './components/SelectMonth';
import buildTimePeriod from './libs/timeUtil';

import {
    PROJECT_ID,  
    GROSS_PROFIT_MEASURE,  
    DATE_ATTRIBUTE,
    DATE_ATTRIBUTE_IN_MONTHS,
    DEFAULT_MONTH,
    DEFAULT_YEAR
} from './config/consts';


class App extends Component {

    constructor(props){
        super(props);

        const defaultMonth = DEFAULT_MONTH;
        const defaultYear = DEFAULT_YEAR;

        const period = buildTimePeriod(defaultMonth, defaultYear);

        this.state = {
            month: defaultMonth,
            year: defaultYear,
            filters: [this.getMonthFilter(period.fromDate, period.toDate)]
        };        
       
    }
   
    onYearChange = (year) => {
        this.setState({           
            year: year
        }, function () {
           
            const period = buildTimePeriod(this.state.month,year);
            console.log("From date: " + period.fromDate);
            console.log("To date: " + period.toDate);
            this.setState({
                filters: [this.getMonthFilter(period.fromDate, period.toDate)]
            })
        });
       
    }

    onMonthChange = (month) => {

        this.setState({
            month: month
        }, function () {            
            const period = buildTimePeriod(month,this.state.year);
            console.log("From date: " + period.fromDate);
            console.log("To date: " + period.toDate);
            this.setState({
                filters: [this.getMonthFilter(period.fromDate, period.toDate)]
            })
        });      
    }

    getMonthFilter(fromDate, toDate) {
      
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: DATE_ATTRIBUTE
                },
                from: fromDate,
                to: toDate,
            }

        }
    }

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: GROSS_PROFIT_MEASURE
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy() {
        return {
            visualizationAttribute:
            {
                displayForm: {
                    uri: DATE_ATTRIBUTE_IN_MONTHS
                },
                localIdentifier: 'a1'
            }
        }
    }

    render() {
        const projectId = PROJECT_ID;
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();
        

        return (
            <div className="App">
                <h1>$ Gross Profit in month <SelectMonth onMonthChange={this.onMonthChange}/> <SelectYear onYearChange={this.onYearChange}/> </h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        filters={this.state.filters}
                        projectId={projectId}
                    />
                </div>
                <h1>$ Gross Profit - All months</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}

export default App;

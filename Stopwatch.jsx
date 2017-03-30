import React, {Component } from 'react';
import './App.css';


class Stopwatch extends Component{
	constructor(props){
		super(props);
		this.state = {
			hours: 0,
			minutes: 0,
			seconds:0
		};
	}

    leading0(num){
            return (num < 10) ? '0' + num : num;
    }

}	

export	default Stopwatch;
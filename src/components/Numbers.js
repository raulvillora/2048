import React, { Component } from 'react';
import '../App.css';

export default class Numbers extends Component {

    static defaultProps = {
        numberName: "n0",
    }

    render = () => {
        var numberName = this.props.numberName,
            numberNamePrint = this.props.numberNamePrint;

        return (
            <div className={numberName}>{numberNamePrint}</div>
        );
    }
}
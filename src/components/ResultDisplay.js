import React, { Component } from 'react'
import './ResultDisplay.css'
export default class ResultDisplay extends Component {


    
    constructor(props) {
        super(props)
        console.log('react',this.props)
    }

    render() {
        return (
            <div>
                <ul className="displayResult">
                    <li className="displayInput">{this.props.displayInput}</li>
                    <li className="displayOutput">{this.props.displayOutput}</li>
                </ul>
            </div>
        )
    }
}

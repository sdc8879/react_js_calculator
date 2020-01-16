import React, { Component } from 'react'
import './Keypad.css';
export default class Keypad extends Component {


    constructor(props) {
        super(props)
        console.log(this.props)
    }

    onclick(type, value) {
        console.log('type----', type)
        console.log('value----', value)
        this.props.calciClick(type, value)
    }



    render() {
        return (
            <div>
                {/* <ul className="common-list">
                    <li className="common-list-item"></li>
                </ul> */}


                {this.props.keypadarray.map((elem1, index1) => (
                    <ul key={index1} className="common-list">
                        {elem1.map((elem2, index2) => (
                            <li key={index2} className="common-list-item">
                                <button type="button" className={"btn btn-" + (elem2.type === "number" ? 'success' : 'outline-primary')} onClick={() => this.onclick(elem2.type, elem2.value)}   >{elem2.value}</button>
                            </li>
                        ))
                        }
                    </ul>
                ))
                }
            </div>
        )
    }
}

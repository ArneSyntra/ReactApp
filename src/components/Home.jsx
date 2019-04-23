import React, { Component } from "react";

//Components List
import Particles from 'react-particles-js';
import {HashRouter, Route } from "react-router-dom";
import { Card, CardBody, CardTitle, Row, Col, Form, CustomInput, FormGroup, Label, Input, FormText } from "reactstrap";



class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            total: 0
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    add = () => {
        const{number1, number2} = this.state;
        this.setState({
            total: (parseInt(number1)+parseInt(number2))
        })
    }

    render() {
        const {total} = this.state;
        return (
            <div>
                 <div>{total}</div>
                 <div>
                     <label>Number 1</label>
                     <input type="text" name="number1" onChange={this.handleChange} />
                </div>
                <div>
                     <label>Number 2</label>
                     <input type="text" name="number2" onChange={this.handleChange}/>
                </div>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}



export default Home;

import React, {Component} from 'react';
// import './App.css';
import Form from "./Form";
import List from "./List";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: []
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        console.log(e.target.title.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="simple-box simple--bg-dark">
                    <h1 className="simple-box-title simple--color-white">React Todo App</h1>
                    <Form handleAdd={this.handleAdd}/>
                    <div className="simple-rule"></div>
                    <List/>
                </div>
            </div>
        );
    }
}
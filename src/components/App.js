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
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd(e) {
        // console.log(e.target.title.value);

        // リダイレクト防止
        e.preventDefault();
        // フォームから受け取ったデータをオブジェクトにオブジェクトに挿入して，stateのtodo配列に追加
        this.state.todo.push({title: e.target.title.value});
        // setStateを使ってstateを上書き
        this.setState({todo: this.state.todo});

        e.target.title.value = '';
    }

    // データ削除
    handleRemove(i){
        // todo配列からi番目から1つ目のデータを除外
        this.state.todo.splice(i,1);
        // setStateでtodo配列を上書き
        this.setState({todo: this.state.todo});
    }



    render() {
        return (
            <div className="App">
                <div className="simple-box simple--bg-dark">
                    <h1 className="simple-box-title simple--color-white">React Todo App</h1>
                    <Form handleAdd={this.handleAdd}/>
                    <div className="simple-rule"></div>
                    <List todos={this.state.todo} handleRemove={this.handleRemove}/>
                </div>
            </div>
        );
    }
}
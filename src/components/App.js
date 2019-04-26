import React, {Component} from 'react';
// import './App.css';
import Form from "./Form";
import TodoList from "./TodoList";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            value: 'all'
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAdd(e) {
        // console.log(e.target.title.value);

        // リダイレクト防止
        e.preventDefault();
        // フォームから受け取ったデータをオブジェクトにオブジェクトに挿入して，stateのtodo配列に追加
        console.log(e.target.title.value);
        this.state.todo.push({title: e.target.title.value});
        // setStateを使ってstateを上書き
        this.setState({todo: this.state.todo});
        console.log(this.state.todo[1]);

        e.target.title.value = '';
    }

    handleChecked(i) {
        this.state.todo[i]["checked"] = this.state.todo[i]["checked"] !== true;
        this.setState({todo: this.state.todo});
        console.log(this.state.todo[1]);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        console.log(e.target.value);
    };

    // データ削除
    handleRemove(i) {
        // todo配列からi番目から1つ目のデータを除外
        this.state.todo.splice(i, 1);
        // setStateでtodo配列を上書き
        this.setState({todo: this.state.todo});
    }


    render() {
        return (
            <div className="App">
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    <h1 className="simple-box-title simple--color-white">React Todo App</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <Form handleAdd={this.handleAdd}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Filter value={this.state.value} handleChange={this.handleChange}/>
                    </Grid>
                </Grid>
                    <div className="simple-rule"></div>
                    <TodoList todos={this.state.todo} handleRemove={this.handleRemove}
                              handleChecked={this.handleChecked}/>
            </div>
        );
    }
}
import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo"

class App extends Component {
    constructor() {
        super()
        this.state = {
            todo: '',
            todoList: []
        }
        this.addTodo = this.addTodo.bind(this)
    }
    handleEvent(e) {
        this.setState({ todo: e })
        // console.log(e)
    }

    addTodo() {
        this.setState({
            todoList: [...this.state.todoList, this.state.todo],
            todo: ''
        })
    }

    render() {
        let list = this.state.todoList.map((element, index) => {
            return <Todo key={index} task={element} />
        })
        return (
            <div className='App'>
                <h1>my to-do list:</h1>
                <div>

                    <input
                        value={this.state.todo}
                        onChange={e => this.handleEvent(e.target.value)} 
                    />
                    <button onClick={this.addTodo}>add</button>
                </div>
                <br/>
                {this.state.todoList}
            </div>
        )
    }
}

export default App;

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
}
handleEvent(e) {
    this.setState({todo: e})
    // console.log(e)
}

addTodo(input){
  console.log(input)
}

render() {
    return (
        <div>
            <h1>my to-do list:</h1>
            <input type="text" onChange={e => this.handleEvent(e.target.value)}/>
            <button onClick={() => {this.addTodo(this.state.todo)}}>add</button>
            <Todo name={this.state.todo}/>
        </div>
    )
}
}

export default App;

import React, {Component} from 'react';

export default class Todo extends Component {
   
    render(){
        return (
            <div>
                <ul>
                    <li>{this.props.todo}</li>
                </ul>
            </div>
        )
    }
}
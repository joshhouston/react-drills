import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }

    handleEvent(e) {
        this.setState({userName: e})
    }

    handleEvent2(e) {
        this.setState({password: e})
    }

    alertInfo() {
        let username = this.state.userName
        let password = this.state.password
        alert(`${username} ${password}`)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.handleEvent(e.target.value)}/>
                <input type="text" onChange={e => this.handleEvent2(e.target.value)}/>
                <button onClick={() => {this.alertInfo()}}>Submit</button>
            </div>
        )
    }
}

export default Login
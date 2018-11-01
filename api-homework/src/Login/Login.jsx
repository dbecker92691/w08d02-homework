import React, {Component} from 'react';


class Login extends Component {
    constructor(){
        super();
        
        this.state = {
            username: '',
            password: '',

        }
        handleInput = (e) => {
            this.setState({
                [e.currentTarget.name]: e.currentTarget.value
              });
              console.log(this.state, 'this is my state')

        }
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.handleLogIn(this.state.username, true)

        }
    }

    render() {
        return(
            <div>
                <form>
                    <input type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='Username' /><br/>
                    <input type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder='Password' /><br/>
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default Login;
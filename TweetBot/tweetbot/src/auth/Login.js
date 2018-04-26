import React from 'react';
var buttonStyle = {
    width: '9rem',
    height: '3rem',
    border: '#036EAE',
    backgroundColor: '#036EAE',
    color: 'white',
    borderRadius: '8px'
}
var textStyle = {
    color: 'white'
}

const API = 'https://git.heroku.com/tweetbotserver.git/api/login'
//http://localhost:3000/api/login'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            passwordhash: ''
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(API, {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} style={this.props.style}>
                <h1 style={textStyle}>Login</h1>   
                <div>
                    <label style={textStyle} for="username">Username</label>
                    <input id="li_username" name="username" type="text" placeholder="enter username" onChange={this.handleChange}/>
                </div>
                <div>
                    <label style={textStyle} for="password">Password</label>
                    <input id="li_password" name="password" type="password" placeholder="enter password" onChange={this.handleChange}/>                    </div>
                <button style={buttonStyle} type="submit">Log in</button>
            </form>
        )
    }
}

export default Login;
import React, {Component} from 'react';
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

const style = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        flex: 1
    },
    input: {
        margin: '8pt',
        padding: '4pt',
        borderRadius: '3pt',
        border: 0,
        outline: 'none',
        backgroundColor: 'white',
        color: 'white'
    }
}
const API = 'https://git.heroku.com/tweetbotserver.git/api/user'
//http://localhost:3000/api/user'

class Signup extends Component{
    constructor(props) {
        super(props)
        this.state={
            username: '',
            passwordhash: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
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
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{...this.props.style, ...style.wrapper}}> {/*(...) is an Object Spread Operator. same function as Object.assign(), but for es6*/}
                <h1 style={textStyle}>Sign up</h1>
                <div>
                    <label style={textStyle} for='username'>Username</label>
                    <input style={style.input} id='su_username' name='username' type='text' placeholder="enter username" onChange={this.handleChange}/>
                </div>
                <div>
                    <label style={textStyle} for="password">Password</label>
                    <input style={style.input} id="su_password" name="password" type="password"  placeholder="enter password" onChange={this.handleChange}/>
                </div>
                <button style={buttonStyle} type="submit">Sign up</button>
            </form>
        )
    }
}

export default Signup;
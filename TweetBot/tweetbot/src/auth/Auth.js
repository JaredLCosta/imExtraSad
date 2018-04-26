import React from 'react';
import Login from './Login';
import Signup from './Signup';

const style = {
    wrapper: {
        width: '100%',
        height: '100%',
        padding: '32pt',
        display: 'flex',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        height: '100%',
        padding: '32pt 0'
    },
    verticalRule: {
        width: '2pt',
        height: '100%',
        backgroundColor: 'white',
        display: 'inline-block',
        flex: 0
    }
}

const Auth = (props) => {
    return (
        <div className='auth-container' style={style.wrapper}>
            <Signup style={style.container}/>
            <span style={style.verticalRule}></span>
            <Login style={style.container} setToken={props.setToken} />
        </div>  
    )
}

export default Auth;
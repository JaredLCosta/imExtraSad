import React from 'react';
const style = {
    container: {
        width: '100vw',
        height: '3rem',
        backgroundColor: '#036EAE',
        color: 'white',
        display: 'flex',
        flexDirection: 'row'
    },
    navItem: {
        flex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4pt 12pt',
        lineBreak: 'strict'
    },
    flexHelper: {
        flex: 1
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state ={
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div style={style.container}>
                <button style={style.navItem}>Tweet Bot</button>
                <span style={style.flexHelper}></span>
                <button style={style.navItem} onClick={this.props.logOut}>Log out</button>
            </div>
        );
    }
}

export default NavBar;
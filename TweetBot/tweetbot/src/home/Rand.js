import React from 'react';
var tweetBox = {
    width: '40vw',
    height: '15rem',
    borderRadius: '8px',
    border: 'white',
    padding: '1rem'
}
var buttonStyle = {
    width: '9rem',
    height: '3rem',
    border: '#036EAE',
    backgroundColor: '#036EAE',
    color: 'white',
    borderRadius: '8px'
}
var the = 'The'
var space = ' '
var becauseSome = 'because some'
var a = 'a'
var became = 'which, became a'
var comma = ','
var perriod = '.'

var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog", " "];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", " "];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", " "];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", " "];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards", " "];

const API = 'https://git.heroku.com/tweetbotserver.git/api/tweet'
//http://localhost:3000/api/tweet'

class Rand extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {currentTweet: ''};
        this.textChange = this.textChange.bind(this);
    }
    handleClick() {
        const min = 0;
        const max = 9
        const rand = min + Math.random() * (max - min);
        var round = Math.round(rand);
        this.setState((prevState, props) => {
            return Object.assign(prevState, {currentTweet: the + space + adjectives[round] + space + nouns[round] + space + adverbs[round] + space + verbs[round] + space + becauseSome + space + nouns[round] + space + adverbs[round] + space + verbs[round] + space + preposition[round] + space + a + space + adjectives[round] + space + nouns[round] + space + became + space + adjectives[round] + comma + space + adjectives[round] + space + nouns[round] + perriod})
        });
    }
    textChange(event) {
        const VALUE = event.target.value || ' ';
        this.setState((prevState, props) => {                             //nondistructive state change!!
             return Object.assign(prevState,{currentTweet: VALUE})
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(API, {
            method: 'POST',
            body: JSON.stringify({tweet: this.state.currentTweet}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
    }
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <textarea style={tweetBox} type="text" onChange={this.textChange} value={this.state.currentTweet} />
                <div>
                    <button style={buttonStyle} onClick={this.handleClick.bind(this)}>Get Tweet</button>
                    <button style={buttonStyle} onClick={this.handleSubmit}>Post Tweet</button>
                </div>
            </div>
        );
    }
}

    export default Rand;
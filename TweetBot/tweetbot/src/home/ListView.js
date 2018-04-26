import React from 'react'

const style = {
    
}

const API = 'https://git.heroku.com/tweetbotserver.git/api/tweet/list'
 //'http://localhost:3000/api/tweet/list'

const DELETE_API = 'https://git.heroku.com/tweetbotserver.git/api/tweet/kill/'
//'http://localhost:3000/api/tweet/kill/'

export class ListView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        }
    }
    componentWillMount() {
        this.retrieveTweets()
    }
    retrieveTweets() {
        fetch(API, {
            method: 'GET'
        }).then(
            res => res.json(),
            err => err
        ).then(json => {
            this.setState({tweets: json});
        }).catch( err =>
            console.log(new Error(err))
        )
    }
    deleteTweet(id) {
        fetch(DELETE_API + id, {
            method: 'GET'
        }).then(
            res => res.json(),
            err => err
        ).then(json => {
            this.retrieveTweets()
        }).catch( err =>
            console.log(new Error(err))
        )
    }
    render() {
        const tweetList = this.state.tweets.map((tweet, i, arr) => {
            return (
                <div>
                    {tweet.tweet}
                    <button onClick={() => this.deleteTweet(tweet.id)}>delete</button>
                </div>
            )
        })
        return (
            <div>
                {tweetList}
            </div>
        )
    }
}
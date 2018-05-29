import React, { Component } from 'react';

class TwitterHandle extends React.Component{
    constructor(props){
        super(props);

        // props.twitterHandle: Data from twitter API
        console.log(props.twitterHandle);
    }

    render(){
        return(
            <div className = "tweetBox">
               <div className = "tweetBoxDockLeft"> 
                   <p>@{this.props.twitterHandle.screen_name}</p>
                    <p>{this.props.twitterHandle.tweet_text}</p>
                </div>
                <div className = "tweetBoxDockRight">
                    <h5>{this.props.twitterHandle.created_at}</h5>
                </div>
            </div>
        )
    }
}

export default TwitterHandle
import React, { Component } from 'react';

class TwitterHandle extends React.Component{
    constructor(props){
        super(props);

        console.log(props.twitterHandle);
    }

    render(){
        return(
            <div>
                <h4>{this.props.twitterHandle.location}</h4>
            </div>
        )
    }
}

export default TwitterHandle
import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
        posts: []
       };
    }

    componentDidMount(){
        this.getPosts();
    }
    getPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then
        (response => {
            console.log(response);
            this.setState({posts: response.data });
        });
    }
    render(){
        return (
            <div>
                <ul>
                    {
                     this.state.posts.map(post=>
                        <li>{post.title}</li>
                        )
                    }
                </ul>
                    
            </div>
        );
        
    }
}

export default Posts;
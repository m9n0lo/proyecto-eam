import React, { Component } from 'react';
import axios from 'axios';

class Albums extends Component {
    constructor() {
        super();
        this.state = {
        albums: []
       };
    }

    componentDidMount(){
        this.getAlbums();
    }
    getAlbums(){
        axios.get('https://jsonplaceholder.typicode.com/albums').then
        (response => {
            console.log(response);
            this.setState({albums: response.data });
        });
    }
    render(){
        return (
            <div>
                <ul>
                    {
                     this.state.albums.map(album=>
                        <li>{album.title}</li>
                        )
                    }
                </ul>
                    
            </div>
        );
        
    }
}

export default Albums;
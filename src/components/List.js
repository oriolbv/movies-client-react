import React, { Component } from 'react';
import Item from './Item';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import {getVideos} from '../api';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false,
            videos : null,
            error : null
        }
    }
    async componentDidMount() {
        this.setState({isLoading : true});
        // Call external API
        
        // Promises example  
        // getVideos()
        //   .then(data => this.setState({ videos: data, isLoading: false }))
        //   .catch(error => this.setState({ error, isLoading: false }));

        try {
            const videos = await getVideos();
            this.setState({ videos , isLoading: false });
        } catch(error){
            this.setState({ error, isLoading: false });
        }
    }
    render() {
        const {videos, isLoading, error} = this.state;
        if (error) {
            return (<div>ERROR!!!</div>)
        }
        if (isLoading) return (<Loading message="Loading ..."/>);
        return (
            <React.Fragment>
                <Header message="Your favourite videos!" onClickAdd={this.handleAdd} />
                <div className='container'>
                    <div className='grid-container'>
                        {
                            videos && videos.map((video, i) => {
                                return (<Item key={i} data={video}/>)
                            })
                        }
                    </div>
                </div>
                <Footer message="Created by OriolBur" />
            </React.Fragment>
        );
    }
}

export default List;
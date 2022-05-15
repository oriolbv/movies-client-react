import React, { Component } from 'react';
import { getVideos, getMovies, getMovies2 } from '../../api';
import Loading from '../../components/Loading';
import Item from '../../components/Item';
import Header from '../../components/Header';
import Add from '../../components/modals/Add';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
      error:null,
      showAdd: false
    };
    // Bind context to be able to used in callbacks
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
  }
  async componentDidMount() {
    this.setState({ isLoading: true });
    
    // Promises example  
    // getMovies()
    //   .then(data => this.setState({ videos: data, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));
    
    try{
      const videos = await getMovies();
      this.setState({ videos:videos , isLoading: false });
    } catch(error){
      this.setState({ error, isLoading: false });
    }

    //const videos = getMovies2();
    //this.setState({ videos: videos , isLoading: false });
    return true;
  }
  handleAdd(e) {
    e.preventDefault();
    this.setState({showAdd: true});
  }
  // Partial function
  handleCloseAdd(reload){
    return () => {
      if(reload){
        this.setState({ isLoading: true , showAdd:false});
        const videos = getMovies2();
        this.setState({ videos: videos , isLoading: false, showAdd: false });
        // getVideos().then(data => this
        //   .setState({ videos: data, isLoading: false, showAdd:false }))
        //   .catch(error => this.setState({ error, isLoading: false, showAdd:false }));
      } else {
        this.setState({ showAdd: false });
      }
    }
  }

  render() {
    const { videos,  isLoading, error } = this.state;
    if (isLoading) {
      return <Loading message="Cargando ..."/>;
    }
    if (error) {
      return <p className="error" >{error.message}</p>;
    }
    return (<React.Fragment>
        <Header onClickAdd={this.handleAdd} />
        <div className="container">
          <div className="grid-container">
              {
                videos && videos.results.map((video,i) => {
                  return (<Item key={i} data={video}/>)
                })
              }
          </div>
        </div>
        { this.state.showAdd && (<Add onClose={this.handleCloseAdd}/>)}
     </React.Fragment>);
  }
}

export default List;
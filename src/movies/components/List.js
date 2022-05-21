import React, { Component, useState, useEffect } from 'react';
import { getVideos, getMovies, getMovies2 } from '../../api';
import Loading from '../../components/Loading';
import Item from '../../components/Item';
import Header from '../../components/Header';
import Add from '../../components/modals/Add';

function List (props) {
    const [isLoading,setIsLoading] = useState(false);
    const [videos,setVideos] = useState(null);
    const [error,setError] = useState(null);
    const [showAdd,setShowAdd] = useState(false);

    const loadAsyncData = async () => {
        setIsLoading(true);

        try {
            const videos = await getMovies();
            setVideos(videos);
            setIsLoading(false);
        } catch(error){
            setError(error);
            setIsLoading(false);
        }
        
      }

    // Equivalent to component did mount
    useEffect(() => {
        loadAsyncData();
        console.log('component mounted!')
    }, []);


    const handleAdd = (e) => {
        e.preventDefault();
        setShowAdd(true);
    }

    // Partial function
    const handleCloseAdd = (reload) => {
        return () => {
            if (reload){
                loadAsyncData();
                setShowAdd(false);
            } else {
                setShowAdd(false);
            }
        }
    }
    
    if (isLoading) {
      return <Loading message="Cargando ..."/>;
    }
    if (error) {
      return <p className="error" >{error.message}</p>;
    }
    return (<React.Fragment>
        <Header onClickAdd={handleAdd} />
        <div className="container">
          <div className="grid-container">
              {
                videos && videos.results.map((video,i) => {
                  return (<Item key={i} data={video}/>)
                })
              }
          </div>
        </div>
        { showAdd && (<Add onClose={handleCloseAdd}/>)}
     </React.Fragment>);
}

export default List;


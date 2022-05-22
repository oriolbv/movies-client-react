import React, { Component, useState, useEffect } from 'react';
import { getVideos, getMovies, getMovies2 } from '../../api';
import Loading from '../../components/Loading';
import Item from '../../components/Item';
import Header from '../../components/Header';
import Add from '../../components/modals/Add';
import useDataFetching from '../../hooks/useDataFetching';

function List (props) {
    const [showAdd, setShowAdd] = useState(false);

    // Equivalent to component did mount
    const [isLoading, error, videos] =
      useDataFetching();


    const handleAdd = (e) => {
        e.preventDefault();
        setShowAdd(true);
    }

    // Partial function
    const handleCloseAdd = (reload) => {
        return () => {
            setShowAdd(false);
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


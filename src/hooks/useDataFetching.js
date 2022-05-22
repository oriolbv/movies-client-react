import { useState, useEffect } from 'react';
import { getMovies } from '../api';

function useDataFetching(dataSource) {
    const [isLoading,setIsLoading] = useState(false);
    const [videos,setVideos] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        console.log("useDataFetching refresh!");
        async function fetchData() {
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
        fetchData();
    }, [dataSource]);

    return [isLoading, error, videos];
}

export default useDataFetching;
import React, { useState, useEffect } from 'react';
import Featured from './Featured';
import Header from './Header';
import Loading from './Loading';

const apiKey = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

const App = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
        setLoading(true);
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                return setMovies(data.results);
            })
            .then(() => {
                setLoading(false);
            });
    };

    return (
        <React.Fragment>
            <Header onSubmit={getMovies} />

            {loading ? (
                <Loading content={'Loading'} />
            ) : (
                <Featured movies={movies} />
            )}
        </React.Fragment>
    );
};

export default App;

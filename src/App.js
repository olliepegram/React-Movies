import React, { useState, useEffect } from 'react';

import Featured from './Featured';
import Header from './Header';
import Loading from './Loading';
import Movie from './Movie';

const apiKey = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

const App = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentMovie, setCurrentMovie] = useState(null);

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

    const handleClickedMovie = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentMovie(data);
            });
    };

    return (
        <React.Fragment>
            <Header onSubmit={getMovies} />

            {currentMovie && <Movie movie={currentMovie} />}

            {loading ? (
                <Loading content={'Loading'} />
            ) : (
                <Featured
                    onSelectedMovie={handleClickedMovie}
                    movies={movies}
                />
            )}
        </React.Fragment>
    );
};

export default App;

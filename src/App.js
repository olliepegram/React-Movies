import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Featured from './Featured';
import Header from './Header';

const apiKey = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

const Wrapper = styled.div`
    @font-face {
        font-family: 'Ubuntu';
        src: url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    }

    font-family: 'Ubuntu', --apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    margin: 0;
    padding: 0;
`;

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
        <Wrapper>
            <Header onSubmit={getMovies} />
            {loading ? <p>Loading movies</p> : <Featured movies={movies} />}
        </Wrapper>
    );
};

export default App;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Featured from './Featured';
import Header from './Header';

const Wrapper = styled.div`
    @font-face {
        font-family: 'Ubuntu';
        src: url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    }

    font-family: 'Ubuntu', --apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
`;

const App = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/trending/movie/week?api_key=270acf29969ace557d877eb41954b02e'
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                return setMovies(data.results);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    // setTimeout(() => {
    //     console.log(movies);
    // }, 3000);

    return (
        <Wrapper>
            <Header />
            {loading ? <p>Loading movies</p> : <Featured movies={movies} />}
        </Wrapper>
    );
};

export default App;

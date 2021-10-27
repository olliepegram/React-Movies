import React from 'react';
import styled from 'styled-components';

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const MovieWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    p {
        text-align: center;
    }
`;

const Featured = ({ movies }) => {
    return (
        <MovieWrapper>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img src={IMG_API + movie.poster_path} alt={movie.title} />
                    <p>{movie.title}</p>
                </div>
            ))}
        </MovieWrapper>
    );
};

export default Featured;

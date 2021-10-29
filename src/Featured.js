import React from 'react';
import styled from 'styled-components';
import Placeholder from './assets/placeholder.png';

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const MovieWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 950px;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    margin-top: 40px;

    .movie-item {
        box-shadow: 0 5px 10px rgb(0 0 0 / 0.7);
        margin-bottom: 100px;
        margin-top: 20px;
        height: 450px;
        cursor: pointer;
    }

    .movie-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #4a47a3;
        margin-top: -3px;
    }

    img {
        width: 300px;
        height: 100%;
    }

    .movie-info h3 {
        color: #fff;
        font-size: 16px;
        width: 200px;
        line-height: 1.5em;
    }
    .tag {
        font-size: 16px;
        border-radius: 50%;
        background-color: #8b84c0;
        padding: 10px;
        min-width: 18px;
        text-align: center;
        box-shadow: 0 1px 1px rgb(0 0 0 / 0.1);
    }
    .green {
        color: #00e400;
    }
    .orange {
        color: #ffc423;
    }
    .red {
        color: #ff1919;
    }
`;

const Featured = ({ onSelectedMovie, movies }) => {
    const ratingColor = (rating) => {
        if (rating >= 8) {
            return 'green';
        } else if (rating >= 6) {
            return 'orange';
        } else {
            return 'red';
        }
    };

    return (
        <MovieWrapper>
            {movies.map((movie) => (
                <div
                    onClick={() => onSelectedMovie(movie.id)}
                    className='movie-item'
                    key={movie.id}
                >
                    {movie.poster_path ? (
                        <img
                            src={IMG_API + movie.poster_path}
                            alt={movie.title}
                        />
                    ) : (
                        <img
                            src={Placeholder}
                            alt={`Placeholder for movie ${movie.title}`}
                            style={{ width: '300px' }}
                        />
                    )}

                    <div className='movie-info'>
                        <h3>{movie.title}</h3>
                        <span
                            className={`tag ${ratingColor(movie.vote_average)}`}
                        >
                            {movie.vote_average}
                        </span>
                    </div>
                </div>
            ))}
        </MovieWrapper>
    );
};

export default Featured;

import React from 'react';
import styled from 'styled-components';

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
        margin-bottom: 40px;
        margin-top: 20px;
    }

    .movie-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #4a47a3;
        margin-top: -3px;
    }

    .movie-info,
    h1 {
        color: #fff;
        font-size: 14px;
    }
    .tag {
        font-size: 16px;
        border-radius: 50%;
        background-color: #8b84c0;
        padding: 10px;
        min-width: 18px;
        text-align: center;
    }
    .green {
        color: green;
    }
    .orange {
        color: orange;
    }
    .red {
        color: red;
    }
`;

const Featured = ({ movies }) => {
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
                <div className='movie-item' key={movie.id}>
                    <img src={IMG_API + movie.poster_path} alt={movie.title} />
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

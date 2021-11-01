import React from 'react';
import styled from 'styled-components';
import Placeholder from './assets/placeholder.png';

const MovieWrap = styled.div`
    width: 950px;
    margin: 40px auto;
    display: flex;
    color: #fff;
    background-color: #4a47a3;
    height: auto;
    box-shadow: 0 5px 10px rgb(0 0 0 / 0.5);

    .vote {
        text-align: right;
    }

    .title {
        float: left;
    }

    .movie-info {
        margin-left: 80px;
        margin-right: 80px;
    }

    .movie-info p {
        font-size: 18px;
        line-height: 1.4em;
    }

    .movie-details {
        display: flex;
    }

    .movie-details h4 {
        padding: 0 50px 0 0;
    }

    .genre {
        padding: 0 30px 0 0;
    }

    img {
        width: 300px;
        height: 100%;
    }
`;

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ movie }) => {
    const {
        title,
        id,
        overview,
        runtime,
        genres,
        budget,
        vote_average,
        release_date,
        poster_path,
    } = movie;

    const ratingColor = (rating) => {
        if (rating >= 8) {
            return 'green';
        } else if (rating >= 6) {
            return 'orange';
        } else {
            return 'red';
        }
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <MovieWrap>
            <div>
                {poster_path ? (
                    <img src={IMG_API + poster_path} alt={title} />
                ) : (
                    <img
                        src={Placeholder}
                        alt={`Placeholder for movie ${title}`}
                        style={{ width: '300px' }}
                    />
                )}
            </div>
            <div className='movie-info'>
                <h1 className='title'>{title}</h1>
                <h1 className={`vote ${ratingColor(vote_average)}`}>
                    {vote_average}
                </h1>
                {genres.map((genre) => (
                    <span className='genre' key={id + Math.random() * 999}>
                        {genre.name}
                    </span>
                ))}
                <p>{overview}</p>
                <div className='movie-details'>
                    <h4>Runtime: {runtime} mins</h4>
                    <h4>Release Date: {release_date}</h4>
                    {budget !== 0 ? (
                        <h4>Budget: {formatter.format(budget)}</h4>
                    ) : null}
                </div>
            </div>
        </MovieWrap>
    );
};

export default Movie;

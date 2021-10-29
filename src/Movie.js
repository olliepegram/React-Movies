import React from 'react';
import { useParams } from 'react-router';

const Movie = () => {
    let { currentMovie } = useParams();
    return <div>{currentMovie}</div>;
};

export default Movie;

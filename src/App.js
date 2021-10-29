import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

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

    const handleClickedMovie = (selectedMovie) => {
        setCurrentMovie(selectedMovie);
    };

    return (
        <Router>
            <Header onSubmit={getMovies} />
            <Switch>
                <Route exact path='/'>
                    {loading ? (
                        <Loading content={'Loading'} />
                    ) : (
                        <Featured
                            onSelectedMovie={handleClickedMovie}
                            movies={movies}
                        />
                    )}
                </Route>
                <Route exact path='movie/'>
                    <Movie currentMovie={currentMovie} movies={movies} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

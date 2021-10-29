import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.header`
    width: 100%;
    background-color: #4a47a3;
    color: #fff;

    .nav-wrapper {
        width: 950px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }

    input {
        padding: 10px;
        border-width: 0px;
    }
`;

const apiKey = process.env.REACT_APP_API_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

const Header = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (search) {
            onSubmit(SEARCH_API + search);
        }
        setSearch('');
    };

    return (
        <Nav>
            <div className='nav-wrapper'>
                <h1 onClick={() => onSubmit(FEATURED_API)}>FILMS</h1>
                <form onSubmit={handleOnSubmit}>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search for a movie'
                        type='text'
                        value={search}
                    />
                </form>
            </div>
        </Nav>
    );
};

export default Header;

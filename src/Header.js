import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4a47a3;
    color: #fff;
    margin-top: -10px;
    min-width: 100%;
`;

const apiKey = process.env.REACT_APP_API_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

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
            <h1>FILMS</h1>
            <form onSubmit={handleOnSubmit}>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search for a movie'
                    type='text'
                />
            </form>
        </Nav>
    );
};

export default Header;

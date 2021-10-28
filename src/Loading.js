import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoadingText = styled.h2`
    text-align: center;
    margin-top: 10%;
    font-size: 70px;
    color: white;
    height: 100vh;
`;

const Loading = ({ content }) => {
    const [text, setText] = useState('Loading');

    useEffect(() => {
        const interval = window.setInterval(() => {
            return text === content + '...'
                ? setText(content)
                : setText((prev) => prev + '.');
        }, 500);

        return () => {
            return clearInterval(interval);
        };
    }, [text]);

    return <LoadingText>{text}</LoadingText>;
};

export default Loading;

// LoadingSpan.tsx
import React from 'react';
import styled from 'styled-components';

interface LoadingProps {
  text?: string; // Optional text to display alongside the loading indicator
}

const Loading: React.FC<LoadingProps> = ({ text = 'Loading...' }) => {
  return (
    <Wrapper className="loading-span">
      <Spinner className="spinner" aria-hidden="true"></Spinner>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.span`
    display: inline-flex;
    align-items: center;
    color: #333;
    font-size: 2.5em;
`;

const Spinner = styled.span`
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #333;
    animation: spin 0.6s infinite linear;
    margin-right: 0.5em;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
export default Loading;

    
  
  
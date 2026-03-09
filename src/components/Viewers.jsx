import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <a href="https://ieee.chitkara.edu.in/" target="_blank" rel="noopener noreferrer">
        <Wrap>
          <img src="https://ieee.chitkara.edu.in/img/ieee.png" alt="IEEE" />
        </Wrap>
      </a>
      <a href="https://codingninjas.chitkara.edu.in/" target="_blank" rel="noopener noreferrer">
        <Wrap>
          <img src="https://codingninjas.chitkara.edu.in/static/media/favicon.490b44367b85c83e6ebd.png" alt="Coding Ninjas" />
        </Wrap>
      </a>
      <a href="https://www.marvel.com/" target="_blank" rel="noopener noreferrer">
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.k9FCTxi2T1E7A7lrgw_XDwHaHa?rs=1&pid=ImgDetMain" alt="Marvel" />
          
        </Wrap>
      </a>
      <a href="https://www.starwars.com/" target="_blank" rel="noopener noreferrer">
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.n01W1TPIkpQ5WlB4TKWbkgAAAA?rs=1&pid=ImgDetMain" alt="Star Wars" />
         
        </Wrap>
      </a>
      <a href="https://www.nationalgeographic.com/" target="_blank" rel="noopener noreferrer">
        <Wrap>
          <img src="https://play-lh.googleusercontent.com/pjLb8IyAGhNb0Wmxq-i1EpH0CeuoIwcMF0z7dmIEjYcksKlLdurWnyNi8AYAJ7SwAXw" alt="National Geographic" />
        </Wrap>
      </a>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 0px;
  display: grid;
  padding: 30px 10px; /* Adjusted padding for smaller screens */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjusted for responsiveness */
  grid-gap: 15px;

  @media (max-width: 768px) {
    padding: 20px 0; /* Further adjust padding for smaller screens */
  }
`;

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 22px 28px -8px, rgb(0 0 0 / 73%) 0px 14px 8px -6px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  height: 200px;
  width: 100%; /* Make width responsive */
  max-width: 300px; /* Adjust maximum width for larger screens */
  margin: 0 auto; /* Center align in container */

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 48px -14px, rgb(0 0 0 / 72%) 0px 24px 18px -8px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }`
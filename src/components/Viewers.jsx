import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="Disney" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="Pixar" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="Marvel" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="Star Wars" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="National Geographic" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
 `

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transtition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 0%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

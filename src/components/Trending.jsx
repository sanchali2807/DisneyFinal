import styled from 'styled-components';
import {Link } from 'react-router-dom';

const Trending = (props) => {
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        <Wrap>
          <img src='https://www.themoviedb.org/t/p/original/tBHDVtEcMl06FbCURRLGVg3TpXp.jpg' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://th.bing.com/th/id/OIP.0wtkgREsUmLx60Z5bGX0uAHaLH?rs=1&pid=ImgDetMain' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://th.bing.com/th/id/OIP.b7wDYzUlO4F_aI11-41eAQHaK3?w=682&h=1000&rs=1&pid=ImgDetMain' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://th.bing.com/th/id/OIP.NITZdJhN0MbRSFDCHrQqSAHaKk?rs=1&pid=ImgDetMain' alt='' />
          </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  font: 400 16px/24px 'Roboto', sans-serif;

`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default Trending;

const Wrap = styled.div`
  border-radius: 10px;
  cursor;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transtition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }


`
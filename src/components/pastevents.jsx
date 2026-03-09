import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewDisney = (props) => {
  return (
    <Container>
      <Title>PAST EVENTS</Title>
      <Content>
        <Wrap>
          <img src='WhatsApp Image 2024-08-27 at 12.50.20_2acd3c94.jpg' alt='' />
        </Wrap>
        <Wrap>
          <img src='WhatsApp Image 2024-09-01 at 23.22.26_1b728b25.jpg' alt='' />
        </Wrap>
        <Wrap>
          <img src='WhatsApp Image 2024-09-01 at 23.22.27_bd5f6b77.jpg' alt='' />
        </Wrap>
        <Wrap>
          <img src='Screenshot 2024-09-02 003343.png' alt='' />
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

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Title = styled.h4`
  text-align: center;
  font-size: 1.8em; 
  margin-bottom: 20px; 
  color: inherit; 
`;

export default NewDisney;

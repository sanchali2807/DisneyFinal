import styled from 'styled-components';
import {Link } from 'react-router-dom';

const Originals = (props) => {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        <Wrap>
          <img src='https://www.cnet.com/a/img/resize/24adea5657094a150eccdba34ed40dc8354a9f34/hub/2022/01/14/848244d8-e2ce-43e0-b725-b5b81b911999/encanto-poster.jpg?auto=webp&width=1200' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://th.bing.com/th/id/OIP.M07sDw2tJzai3cZ2iS1sJgHaLH?rs=1&pid=ImgDetMain' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://www.disneyplusinformer.com/wp-content/uploads/2021/11/B7C7891B-79FD-4980-B0BC-9FA98EA12FE1-1230x1536.jpeg' alt='' />
          </Wrap>
          <Wrap>
          <img src="https://www.liveforfilm.com/wp-content/uploads/2022/08/hocus-pocus-2-poster.jpg" alt='' />
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

export default Originals;;

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
import styled from 'styled-components';
import {Link } from 'react-router-dom';

const Trending = (props) => {
  return (
    <Container>
      <Content>
        <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-IMG_9053%20(Custom).JPG-1fc0dc74-216c-41d4-8575-67855b317724?alt=media&token=40fc9239-3c09-4683-8670-8493c6dc163c' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-DSC_0089%20(Custom).JPG-e97fe3de-7fa2-4950-b76b-f122e68c2bb6?alt=media&token=b65bfd74-e6c1-4063-8796-5b67098c40d5' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-IMG-20221109-WA0031.jpg-6279e5bd-40a0-4107-b176-46466067444d?alt=media&token=c6de035a-80a2-4efa-aa4c-81fe582a274a' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-IMG_9415%20(Custom).JPG-42ec92dd-5128-47fa-8d11-1dbe35837886?alt=media&token=0f55894e-8cc8-42e0-9fc8-2246fe7dea44' alt='' />
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
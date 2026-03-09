import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Originals = (props) => {
  return (
    <Container>
      <Title>PAST EVENTS AT A GLIMPSE</Title>
      <Content>
        <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-IMG_3518-min.JPG-64d6b54b-4daf-475b-9593-940b87968668?alt=media&token=b9ef41b4-2a1a-4136-98dc-6074bf851e84' alt='' />
        </Wrap>
        <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-CUP07737%20(Custom).JPG-b4cd26f5-211c-45fd-9e3b-0eaad989d74c?alt=media&token=57faa515-813c-4b05-b38a-ba2403cba373' alt='' />
        </Wrap>
        <Wrap>
          <img src='https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-IMG_6479%20(1)%20(Custom).jpg-443543a9-1156-4395-9b26-bd3d5ef0423b?alt=media&token=d8de1313-8ca7-4128-9401-d6e654853433' alt='' />
        </Wrap>
        <Wrap>
          <img src="https://firebasestorage.googleapis.com/v0/b/codingninjas-main.appspot.com/o/W9ersYUUwXSs37RqhEDFFj0sQq23-IMG_7624%20(1)%20(Custom).jpg-1c39c11e-8517-407b-81bd-bcf055961cfb?alt=media&token=4e135f15-bd5d-4708-8207-0f147c412373" alt='' />
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

export default Originals;

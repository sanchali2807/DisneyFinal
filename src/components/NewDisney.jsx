import styled from 'styled-components';
import {Link } from 'react-router-dom';

const NewDisney = (props) => {
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        <Wrap>
          <img src='https://www.thoughtco.com/thmb/DPs5iAcstkI_McKUXPlmS71Hnwk=/2560x1920/filters:no_upscale():max_bytes(150000):strip_icc()/A1a5p71MkcL._RI_-5c857ce2c9e77c0001422f65.jpg' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://4.bp.blogspot.com/-s54TICyNVcQ/WhwwGz09NII/AAAAAAAB4sA/A7900dCzSGoCuzP264eLU-RNtaBiwxFCwCLcBGAs/s1600/coco-movie-poster-8.jpg' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://th.bing.com/th/id/OIP.WIRhxZ-vlLEX7JYZsjCxqQAAAA?w=380&h=537&rs=1&pid=ImgDetMain' alt='' />
          </Wrap>
          <Wrap>
          <img src='https://i5.walmartimages.com/asr/f19376c7-a141-4469-967e-373a295f67a2_1.0efc3602a445f967be7ee3d36ca47664.jpeg' alt='' />
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

export default NewDisney;

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
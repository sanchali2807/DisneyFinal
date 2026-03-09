import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./upcomingevents";
import NewDisney from "./pastevents";
import Originals from "./glimpse1";
import Trending from "./glimpse2";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
      <Footer>
        <p>© CHITKARA EVENTS. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </Footer>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8); 
  padding: 40px 0;
  text-align: center;
  color: white;
  font-size: 14px;
  width: 100vw; 
  margin-left: calc(-50vw + 50%); 

  p {
    margin: 10px 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 20px 0; 
  }
`;

export default Home;

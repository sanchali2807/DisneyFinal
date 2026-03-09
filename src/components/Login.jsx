import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const Login = (props) => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/home'); 
  };

  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="https://rangrezz.chitkara.edu.in/assets/images/chitkara1.png" alt="CTALogoOne" />
          <SignUp onClick={handleLoginClick}>GET ALL EVENT DETAILS HERE</SignUp> {/* Add onClick event */}
          <Description>
            The Chitkara Event Management website allows users to explore and manage various events with ease. It offers a streamlined interface for viewing event details, accessing event media, and navigating through different sections of the site. The website enhances user experience with features like dynamic image sliders, responsive layouts, and smooth transitions.
          </Description>
          {/* <CTALogoTwo src="public/images/cta-logo-two.png" alt="CTALogoTwo" /> */}
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-image: url('https://www.chitkara.edu.in/wp-content/themes/chitkara/images/home-banner/can/slider-img07.jpg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  filter: blur(8px); 
  -webkit-filter: blur(8px);
  background-attachment: fixed; 
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: white;
  font: 700 16px/1 "Poppins", sans-serif;
  background-color: black;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none; 
  cursor: pointer; 

  &:hover {
    background-color: red;
  }
`;

const Description = styled.p`
  font: 16px/1 "Poppins", sans-serif;
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;

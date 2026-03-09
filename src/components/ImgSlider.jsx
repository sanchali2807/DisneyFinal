import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="WhatsApp Image 2024-08-21 at 20.37.19_506b24fe.jpg" />
      </Wrap>
      <Wrap>
        <img src="Hack Your Brain.png" alt="The Hackathon" />
      </Wrap>
      <Wrap>
        <img src="https://www.chitkara.edu.in/wp-content/uploads/2023/03/ceo-conclave.jpg" alt="Sandbox" />
      </Wrap>
      <Wrap>
        <img src="https://www.chitkara.edu.in/wp-content/uploads/2023/12/Lit-Fest-banner.jpg" alt="Litfest" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 0px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    max-height: 400px; 
    object-fit: contain; 
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 0.3s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

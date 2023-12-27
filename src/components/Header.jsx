// HeaderComponent.jsx
import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
        <a>
          <img src="public/images/home-icon.svg" />
          <span>HOME
          </span>
        </a>
        <a>
          <img src="public/images/search-icon.svg" />
          <span>SEARCH
          </span>
        </a>
        <a>
          <img src="public/images/watchlist-icon.svg" />
          <span>WATCH LIST
          </span>
        </a>
        <a>
          <img src="public/images/original-icon.svg" />
          <span>ORIGINALS
          </span>
        </a>
        <a>
          <img src="public/images/movie-icon.svg" />
          <span>MOVIES
          </span>
        </a>
        <a>
          <img src="public/images/series-icon.svg" />
          <span>SERIES
          </span>
        </a>
      </NavMenu>
      <Login>
      Login
      </Login>
    </Nav>
  );
}

export default Header;


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #090b13;
  z-index: 1000; 
  display: flex;
  align-items: center;
  padding: 0 36px;
  `;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%; 
  align-items: center;
  justify-content: flex-end;
  margin: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  
  @media (max-width: 768px) {
    display: none;
  }  
    
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        transform: scaleX(0.5);
      }
      } 
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    }
  }
`;
const UserImg = styled.img` 
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: auto;
  margin-right: 40px;
`
const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
font: 14px/1 'Roboto', sans-serif;
text-transform: uppercase;
letter-spacing: 2px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all .2s ease-in-out;
margin-left: auto; 

&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
  
}

`
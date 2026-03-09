import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Nav>
      <Logo src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/mini-logo.png" />
      <NavMenu>
        <Link to="/">
          <img src="public/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </Link>
        <Link to="/FAQ">
          <img src="public/images/search-icon.svg" alt="FAQ" />
          <span>FAQ</span>
          </Link>
        
        <a href="/contactus.html"> {/* href to navigate to contactus.html in the public folder */}
          <img src="public/images/watchlist-icon.svg" alt="Contact Us" />
          <span>CONTACT US</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
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
`;

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
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

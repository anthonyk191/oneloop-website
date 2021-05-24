import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  z-index: 18;
	margin-top: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 30px;
  }
  li a {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
  li a:hover {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media (max-width: 887px) {
    flex-flow: column nowrap;
    background-color: #022851;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 43vw; 
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      padding: 18px 10px;
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/teamintro">Teams</a></li>
      <li><a href="/sponsors">Sponsors</a></li>
      <li><a href="/poddetails">Pod</a></li>
      <li><a href="/joinus">Join</a></li>
    </Ul>
  )
}

export default RightNav;
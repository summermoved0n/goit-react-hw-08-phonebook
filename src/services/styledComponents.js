import { NavLink, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #f7f7f7;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  &.active {
    font-size: 24px;
    color: rgb(16, 189, 189);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.04em;
  }
`;

export const HomeLink = styled(Link)`
  color: #f7f7f7;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    color: rgb(16, 189, 189);
  }
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(143, 0, 172, 0.8);
  margin-bottom: 30px;
  background: linear-gradient(
    to left,
    red,
    orange,
    yellow,
    green,
    blue,
    pink,
    rgb(16, 189, 189),
    violet
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  animation: ${rainbowAnimation} 3s linear infinite;
`;

const { NavLink } = require('react-router-dom');
const { default: styled } = require('styled-components');

export const StyledLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  &.active {
    font-size: 26px;
    color: rgba(143, 0, 172, 0.8);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.1em;
  }
`;

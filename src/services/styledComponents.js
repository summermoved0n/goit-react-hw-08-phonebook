const { NavLink } = require('react-router-dom');
const { default: styled } = require('styled-components');

export const StyledLink = styled(NavLink)`
  color: var(--mainText);
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  &.active {
    font-size: 26px;
    color: var(--blueColor);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.1em;
  }
`;

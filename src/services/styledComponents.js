import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

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
  &:hover {
    color: rgb(16, 189, 189);
  }
`;

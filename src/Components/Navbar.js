import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Mycontext } from '../Context/Context';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
`;
const NavItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Links = styled(Link)`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
  margin: 0 10px;
  padding: 0 1rem;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #000;
    border-bottom: 3px solid #000;
  }
  &:active {
    color: blue;
  }
  span {
    color: #000;
  }
`;

const Navbar = () => {
  const { count } = useContext(Mycontext);
  return (
    <Nav>
      <Links to='/'>
        {' '}
        <span>Store</span>
      </Links>

      <NavItem>
        <Links to='/'>Home</Links>
        <Links to='/products'>Products</Links>
        <Links to='/admin'>Admin</Links>
        <Link to='/cart'>
          <IconButton aria-label='show 4 new mails' color='inherit'>
            <Badge badgeContent={count} color='secondary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import ProductList from './ProductList';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const HomePage = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;
const Cover = styled.div`
  width: 98%;
  height: 200px;
  background: #09b5e999;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  margin: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #060627;
  text-shadow: 2px 0px 2px #171618df;

  &:hover {
    text-shadow: 2px 2px #0c024666;
    color: #03043a;
  }
`;

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HomePage>
      <div>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          Categories
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Tawa</MenuItem>
          <MenuItem onClick={handleClose}>Prawn</MenuItem>
          <MenuItem onClick={handleClose}>Crab</MenuItem>
        </Menu>
      </div>
      <Cover>
        <h1>Lets grab fresh </h1>
      </Cover>
      <h4>Product List</h4>
      <ProductList />
    </HomePage>
  );
};

export default Home;

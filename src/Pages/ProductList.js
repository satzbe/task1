import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Mycontext } from '../Context/Context';
const Products = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Cards = styled(Card)`
  width: 250px;
  height: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #0dd4ca;

  padding: 5px;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: red;
  font-size: 12px;
`;
const Span = styled.span`
  color: #000;
  font-family: cursive;
  font-size: 15px;
`;

const ProductList = () => {
  const { list } = useContext(Mycontext);

  return (
    <Products>
      {list.map((val, key) => {
        return (
          <Cards key={val.id}>
            <CardHeader title={val.Name} />
            <Links to={`/detail/${val.id}`}>
              <CardMedia>
                <Img src={val.image} />
              </CardMedia>
              <CardContent>
                {' '}
                <Span>Rs. {val.price}</Span>
                <p>{val.Description}</p>
              </CardContent>
            </Links>
          </Cards>
        );
      })}
    </Products>
  );
};

export default ProductList;

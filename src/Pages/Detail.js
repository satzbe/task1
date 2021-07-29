import { Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { Mycontext } from '../Context/Context';
import { useHistory } from 'react-router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useEffect } from 'react';

const SingleProduct = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 80vh;
  margin: 20px;
  background: #000;
  border-radius: 5px;
`;
const ProductDetails = styled.div`
  width: 100%;
  height: 60vh;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const Buttons = styled(Button)`
  width: 150px;
  margin: 10px 0;
`;

const Detail = props => {
  const { list, addCart, count, deleteCart, cartProduct } =
    useContext(Mycontext);
  let product = list.find(item => item.id === parseInt(props.match.params.id));

  const history = useHistory();
  console.log(cartProduct);
  useEffect(() => {
    cartProduct === [] ? (cartProduct = product) : cartProduct;
  });

  return (
    <SingleProduct>
      <Button onClick={() => history.push('/')}>
        <ArrowBackIosIcon />{' '}
      </Button>
      <ProductImage src={product.image} />
      <ProductDetails>
        <h3>{product.Name}</h3>
        <p> Price :{product.price}</p> <br />
        <p> Description: {product.Description}</p>
        <Buttons color='primary'>Buy Now</Buttons>
        <Buttons color='secondary' onClick={() => addCart(count)}>
          Add to Cart
        </Buttons>
        <Buttons color='secondary' onClick={() => deleteCart(count)}>
          -{' '}
        </Buttons>
      </ProductDetails>
    </SingleProduct>
  );
};

export default Detail;

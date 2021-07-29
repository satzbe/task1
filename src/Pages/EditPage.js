import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Mycontext } from '../Context/Context';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Edit = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 15px;
  }
  p {
    color: red;
    font-size: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  select {
    margin: 10px 0;
  }
  #update {
    color: green;
  }
  #cancel {
    color: red;
  }
`;

const EditPage = props => {
  const { list, editProduct } = useContext(Mycontext);
  let history = useHistory();
  const product = list.find(
    item => item.id === parseInt(props.match.params.id)
  );

  const [error, setError] = useState({ name: '', price: '' });
  const [data, setData] = useState({
    name: product.Name,
    price: product.price,
    pic: product.image,
  });
  console.log(data);
  const fish = list[0].image;
  const crab = list[2].image;
  const lob = list[3].image;
  const number = RegExp(/^[0-9\b]+$/);

  const change = e => {
    const { value, name } = e.target;

    let formError = error;
    switch (name) {
      case 'name':
        formError.name =
          value.length < 3 && value.length > 0 ? 'minimum 3 characters' : '';
        break;
      case 'price':
        formError.price =
          number.test(value) && value.length > 0 ? '' : 'Enter number only';
        break;
      default:
        break;
    }
    setData({ ...data, [name]: value });
    setError(formError);
    console.log(error);
  };

  const submit = e => {
    e.preventDefault();
    const edited = {
      id: product.id,
      Name: data.name,
      price: data.price,
      image: data.pic,
      Description: product.Description,
    };
    editProduct(edited);
    console.log(edited);
    history.push('/admin');
  };

  return (
    <Edit>
      <form onSubmit={submit}>
        <input type='text' name='name' value={data.name} onChange={change} />
        {error.name.length > 0 && <p>{error.name}</p>}

        <input type='text' name='price' value={data.price} onChange={change} />
        {error.price.length > 0 && <p>{error.price}</p>}

        <select name='pic' onChange={change} value={data.pic}>
          <option value={data.pic}>Select Image</option>
          <option value={fish}>Fish</option>
          <option value={crab}>Crab</option>
          <option value={lob}>Lobster</option>
        </select>
        <div>
          <Button id='update' type='submit'>
            Update
          </Button>
          <Button id='cancel' onClick={() => history.push('/admin')}>
            Cancel
          </Button>
        </div>
      </form>
    </Edit>
  );
};

export default EditPage;

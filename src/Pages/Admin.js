import React from 'react';
import {
  TableCell,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableBody,
  Button,
  Modal,
} from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { useContext, useState } from 'react';
import { Mycontext } from '../Context/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminPage = styled.div`
  width: 100%;
  height: 100vh;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const ModalDiv = styled.div`
  width: 60%;
  height: 60vh;
  margin: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: beige;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  input {
    padding: 5px;
    font-size: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  p {
    color: red;
    font-size: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  span {
    color: blue;
  }
`;

const formValid = ({ error, ...rest }) => {
  let valid = true;

  Object.values(error).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === '' && (valid = false);
  });

  return valid;
};
const number = RegExp(/^[0-9\b]+$/);
const Admin = () => {
  const { list, addProduct, editProduct, removeProduct } =
    useContext(Mycontext);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: '',
    price: '',
    pic: '',
    error: { name: '', price: '' },
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const description = list[0].Description;
  const fish = list[0].image;
  const crab = list[2].image;
  const lob = list[3].image;

  const handleClose = () => {
    setOpen(false);
  };

  const change = e => {
    const { value, name } = e.target;

    let formError = data.error;
    switch (name) {
      case 'name':
        formError.name = value.length < 3 ? 'minimum 3 characters' : '';
        break;
      case 'price':
        formError.price =
          number.test(value) && value.length > 0 ? '' : 'Enter number only';
        break;
      default:
        break;
    }
    setData({ ...data, [name]: value });
    console.log(data.error);
  };
  const Submit = e => {
    e.preventDefault();
    const newProduct = {
      id: list.length + 10,
      Name: data.name,
      price: data.price,
      Description: description,
      image: data.pic,
    };
    if (formValid(data)) {
      addProduct(newProduct);
      setData({
        name: '',
        price: '',
        pic: '',
        error: { name: '', price: '' },
      });
      setOpen(false);
    } else {
      console.error('Please fill out the form');
    }
  };

  return (
    <AdminPage>
      <Button color='primary' onClick={handleOpen}>
        Add product
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalDiv>
          <form onSubmit={Submit}>
            <input
              type='text'
              name='name'
              value={data.name}
              placeholder='Product name'
              onChange={change}
              noValidate
            />
            {data.error.name.length > 0 && <p>{data.error.name}</p>}
            <label>Rs.</label>
            <input
              type='text'
              placeholder='Price'
              name='price'
              value={data.price}
              onChange={change}
              noValidate
            />
            {data.error.price.length > 0 && <p>{data.error.price}</p>}
            <select name='pic' onChange={change} value={data.pic} noValidate>
              <option value='select'>Select Image</option>
              <option value={fish}>Fish</option>
              <option value={crab}>Crab</option>
              <option value={lob}>Lobster</option>
            </select>

            <Button type='submit'>Add</Button>
          </form>
        </ModalDiv>
      </Modal>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow align='center'>
              <TableCell align='center'>Product Name</TableCell>
              <TableCell align='center'>Image</TableCell>
              <TableCell align='center'>Price in Rs()</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((val, key) => {
              return (
                <TableRow key={key} align='center'>
                  <TableCell align='center'>{val.Name}</TableCell>
                  <TableCell align='center'>
                    <Img src={val.image} />
                  </TableCell>
                  <TableCell align='center'>
                    {val.price}
                    <Button onClick={() => removeProduct(val.id)}>
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                    <Link to={`/edit/${val.id}`}>
                      <Button onClick={() => editProduct(val.id)}>
                        <EditOutlinedIcon />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminPage>
  );
};

export default Admin;

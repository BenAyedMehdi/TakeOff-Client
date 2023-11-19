import React, { useState, useEffect } from 'react';
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import apiCalls from '../../api/apiCalls';
import Iconify from '../iconify';

export default function FormDialog({user}) {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [choice, setChoice] = React.useState(1);
  const [name, setName] = React.useState('');
  const [description, setDescripton] = React.useState('');
  const [price, setPrice] = React.useState('');

  useEffect(() => {
    const getCategories = async () => {
      const categoriesFromServer = await apiCalls.GetAllCategories();
      setCategories(categoriesFromServer);
    };
    getCategories();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChoice(event.target.value);
  };  
  
  const submit = async () => {
    const product = {
      "productName": name,
      "description": description,
      "price": price,
      "categoryId": choice,
      "companyId": user.company.companyId
    }
    const responseAddProduct = await apiCalls.AddProduct(product);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleClickOpen}>
        New Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add product</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a new product and it will be promoted among other companies</DialogContentText>
          <Stack marginTop={5} spacing={3}>
            <TextField name="name" label="Product name" onChange={(e) => setName(e.target.value)}/>
            <TextField name="description" label="Description" onChange={(e) => setDescripton(e.target.value)} />
            <TextField name="price" label="price" onChange={(e) => setPrice(e.target.value)}/>
            <InputLabel htmlFor="max-width">Category</InputLabel>
            <Select
              autoFocus
              value={choice}
              onChange={handleChange}
              label="category"
              inputProps={{
                name: 'category',
                id: 'category',
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category.categoryId} value={category.categoryId}>{category.categoryName}</MenuItem>
              ))}
            </Select>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={submit}>
              Add product 
            </LoadingButton>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

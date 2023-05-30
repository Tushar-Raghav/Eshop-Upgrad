import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
function Product() {
    const { id }  = useParams() 
    const [age, setAge] = React.useState('');
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');
    const [itemAvailablity,setItemAvailablity] = useState('');
    const [manufacturer,setManufacturer] = useState('');
    const role=localStorage.getItem('role')
    const url =`http://localhost:3001/api/v1/products/${id}`
    const handleChange = (event) => {
        setAge(event.target.value);
      };
     
    async function fetchProduct(){
        try{
            const response = await axios.get(url)
        console.log(response.data)
        setData(response.data)
        }catch(err){
            console.log('err in fetch product > '+err)
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    if(role=='admin'){
        return(
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <AddShoppingCartIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Add Product
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <FormControl>
                      <TextField
                        autoComplete="productName"
                        name="productName"
                        required
                        fullWidth
                        id="productName"
                        label="Product Name"
                        onChange={(e)=>{}}
                        focused
                      />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Categories
                        </InputLabel>
                        <Select
                          name="categories"
                          id="demo-simple-select"
                          value={age}
                          label="Categories"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Electronics"}>Electronics</MenuItem>
                          <MenuItem value={"Men's wear"}>Men\'s wear</MenuItem>
                          <MenuItem value={"Shoes"}>Shoes</MenuItem>
                          <MenuItem value={"Clothes"}>Clothes</MenuItem>
                          <MenuItem value={"Furniture"}>Furniture</MenuItem>
                          <MenuItem value={"Food and beverage"}>
                            Food and beverage
                          </MenuItem>
                          <MenuItem value={"Book"}>Book</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="Price"
                        label="price"
                        name="price"
                        autoComplete="price"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="itemAvailablity"
                        label="itemAvailablity"
                        type="number"
                        id="itemAvailablity"
                        autoComplete="itemAvailablity"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="imageURL"
                        label="imageURL"
                        type="url"
                        id="imageURL"
                        autoComplete="imageURL"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="manufacturer"
                        label="manufacturer"
                        type="name"
                        id="manufacturer"
                        autoComplete="manufacturer"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <textarea
                        id="productDesc"
                        name="productDesc"
                        rows={6}
                        cols={52}
                      ></textarea>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add Product
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 2 }} />
            </Container>
        )
    }else if(role=='user'){
        
  return (
    <div>
      Product id {id}
    </div>
  )
    }
}

export default Product

import React from "react";
import Header from "../../common/header/Header";
import axios from "axios";
import { useEffect } from "react";
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
import './Product.css'

const style = {
  position: "absolute",
  left: "35%",
  width: '30%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  height:'95%',
  marginTop:'2%',
};
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
const defaultTheme = createTheme();
function Products() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (event) => {};
  const url = "http://localhost:3001/api/v1/products";
  async function fetchProducts() {
    let res = await axios.get(url);
    console.log(res.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleProduct=(event)=>{
    const data = new FormData(event.currentTarget);
    let name=data.get('productName')
    let categories=data.get('categories')
  }
  return (
    <div>
      <Header click={handleOpen} role={localStorage.getItem("role")} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={defaultTheme}>
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
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="productName"
                        required
                        fullWidth
                        id="productName"
                        label="Product Name"
                        inputProps={{ maxLength: 50, minLength: 5 }}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Categories
                        </InputLabel>
                        <Select
                          name='categories'
                          id="demo-simple-select"
                          value={age}
                          label="Categories"
                          onChange={handleChange}
                        >
                          <MenuItem value={'Electronics'}>Electronics</MenuItem>
                          <MenuItem value={'Men\'s wear'}>Men\'s wear</MenuItem>
                          <MenuItem value={'Shoes'}>Shoes</MenuItem>
                          <MenuItem value={'Clothes'}>Clothes</MenuItem>
                          <MenuItem value={'Furniture'}>Furniture</MenuItem>
                          <MenuItem value={'Food and beverage'}>Food and beverage</MenuItem>
                          <MenuItem value={'Book'}>Book</MenuItem>
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
                        id="manufacturer"
                        autoComplete="manufacturer"
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
                      <textarea id="productDesc" rows={6} cols={45}></textarea>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onSubmit={handleProduct}
                  >
                    Add Product
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 2 }} />
            </Container>
          </ThemeProvider>
        </Box>
      </Modal>
    </div>
  );
}

export default Products;

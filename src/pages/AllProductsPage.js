import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';
import apiCalls from '../api/apiCalls'
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/allProducts';

// ----------------------------------------------------------------------

export default function AllProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await apiCalls.GetAllProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);

  const GetCompanyNameById = async (id) => {
    const found = await apiCalls.GetCompanyById(id);
    return found.compnayName;
  }; 

   const allProducts = products.map(  (p, index) => {
    const tmp = PRODUCTS[index];
    
    // Company name not working yet
    /* let companyName = GetCompanyNameById(p.companyId).then(res => {companyName = res});
     const tmpc = await GetCompanyById(p.companyId)
    tmpc.then((res) => {
      companyName = res.compnayName
    }); 
    console.log(companyName)
    */
    tmp.name = p.productName;
    tmp.price = p.price;
    tmp.company = "";
    console.log('tmp',tmp)  
    return tmp;
  })


  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Explore products </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={allProducts} />
        <ProductCartWidget />
      </Container>
    </>
  );
}

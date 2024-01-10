"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/actions/poleActions";
import Sort from "@/components/sort";

import ProductGrid from "@/components/product-grid";
import Container from "@mui/material/Container";
import Stack from "@mui/system/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PolesFilter from "@/components/poles/poles-filter";

export default function Poles({ searchParams }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      const { poles } = await getAllProducts({ ...searchParams, poleLength: searchParams.poleLength || [] });
      setProducts(poles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Banner bannerName="10" />
      <Container sx={{ py: 2 }} maxWidth="xl">
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Box width={{ md: "1100px" }} sx={{ backgroundColor: "yellow" }}>
            <Box sx={{py:1}}>
              <PolesFilter />
            </Box>
            
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
            >
              <Typography variant="h5" align="center">
                {products.length} Items
              </Typography>
              <Box>
                <Sort />
              </Box>
            </Box>
            <ProductGrid products={products} />
          </Box>
        </Stack>
      </Container>
    </main>
  );
}

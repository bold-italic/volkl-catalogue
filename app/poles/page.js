"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/actions/poleActions";
import Sort from "@/components/sort";

import ProductGrid from "@/components/product-grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Poles({ searchParams }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      const { poles } = await getAllProducts(searchParams);
      setProducts(poles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Banner bannerName="10" />
      <Container sx={{ pb: 3 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 2,
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
      </Container>
    </main>
  );
}

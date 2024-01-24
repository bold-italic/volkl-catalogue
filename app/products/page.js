"use client";
import { useEffect, useState, useCallback } from "react";
import { getAllProducts } from "@/lib/product-actions";
import ProductGrid from "@/components/product-grid";
import Sort from "@/components/sort";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AllProducts({ searchParams }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const { products } = await getAllProducts({
        ...searchParams,
      });
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchProducts();
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [fetchProducts]);

  return (
    <main>
      <Container sx={{ py: 6 }} maxWidth="xl">
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

"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/actions/ski-actions";
import ProductGrid from "@/components/product-grid";
import Sort from "@/components/sort";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AllMountain({ searchParams }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      const { skis } = await getAllProducts({
        ...searchParams,
        category: "AllMountain",
      });
      setProducts(skis);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Banner bannerName="5" />
      <Container sx={{ pb: 6 }} maxWidth="xl">
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

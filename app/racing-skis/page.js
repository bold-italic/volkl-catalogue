"use client";
import { useEffect, useState, useCallback } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/product-actions";
import ProductGrid from "@/components/product-grid";
import Sort from "@/components/sort";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Racing({ searchParams }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      const { products } = await getAllProducts({
        ...searchParams,
        tag: "skis",
        category: "Racing",
        sort,
      });
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, [searchParams, sort]);

  useEffect(() => {
    fetchProducts();
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [fetchProducts]);

  const handleSortChange = (selectedSort) => {
    setSort(selectedSort);
  };

  return (
    <main>
      <Banner bannerName="2" />
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
              <Sort onSortChange={handleSortChange} />
            </Box>
          </Box>
          <ProductGrid products={products} />
        </Box>
      </Container>
    </main>
  );
}

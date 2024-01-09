"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/actions/poleActions";
import Sort from "@/components/sort";

import ProductGrid from "@/components/product-grid";
import Container from "@mui/material/Container";
import Stack from "@mui/system/Stack";
import Box from "@mui/material/Box";

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
      <Container sx={{ py: 2 }} maxWidth="xl">
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Box width={{ md: "1100px" }} sx={{ backgroundColor: "yellow" }}>
            FILTER BY:
          </Box>
          <Box sx={{ flexGrow: 1, backgroundColor: "yellow" }}>
            <Box>
              <Box>{products.length} items</Box>
              <Box>
                <Sort />
              </Box>
              <Box>---</Box>
            </Box>
            <ProductGrid products={products} />
          </Box>
        </Stack>
      </Container>
    </main>
  );
}

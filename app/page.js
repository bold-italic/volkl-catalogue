"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/actions/product-actions";
import ProductGrid from "@/components/product-grid";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home({ searchParams }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      const { products } = await getAllProducts({
        ...searchParams,
        featured: true,
      });
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Banner bannerName="1" />
      <Container sx={{ pb: 6 }} maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ pb: 1, fontWeight: 800, letterSpacing: 1 }}
        >
          FEATURED SKIS
        </Typography>
        <ProductGrid products={products} />
      </Container>
    </main>
  );
}

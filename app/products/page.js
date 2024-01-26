"use client";
import { useEffect, useState, useCallback } from "react";
import { getAllProducts } from "@/lib/product-actions";
import ProductGrid from "@/components/product-grid";
import Sort from "@/components/sort";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [showProducts, setShowProducts] = useState(false); // Control when to display products

  // Use useEffect to extract search parameter from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    setSearchInput(searchParam || ""); // Set searchInput to the value from URL or empty string if not present
  }, []);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const { products } = await getAllProducts({
        sort,
        search: searchInput,
      });
      setProducts(products);
      // Provide a short delay before displaying the products
      setTimeout(() => {
        setShowProducts(true);
      }, 500); // Adjust the delay time
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [sort, searchInput]);

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
              {loading
                ? "Loading..."
                : showProducts
                ? `${products.length} Items`
                : ""}
            </Typography>
            <Box>
              <Sort onSortChange={handleSortChange} />
            </Box>
          </Box>
          {showProducts && <ProductGrid products={products} />}
        </Box>
      </Container>
    </main>
  );
}

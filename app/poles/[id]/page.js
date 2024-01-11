"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getOneProduct } from "@/lib/actions/poleActions";
import PoleGrid from "@/components/poles/pole-grid";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PoleView() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const pole = await getOneProduct(id);
      setProductData(pole);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Container sx={{ py: 3 }} maxWidth="xl">
        <Typography gutterBottom variant="h7" component="h2">
          {productData?.name}
        </Typography>
        <Box>
          <PoleGrid poles={productData} />
        </Box>
      </Container>
    </main>
  );
}

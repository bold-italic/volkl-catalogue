"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getOneProduct } from "@/lib/actions/poleActions";
import PoleGrid from "@/components/poles/pole-grid";
import SpecsGrid from "@/components/specs-grid";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function PoleView() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [productData, setProductData] = useState({});
  const sizes = productData.size || [];
  const colors = productData.color || [];

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
        <Typography
          gutterBottom
          variant="h4"
          sx={{ fontWeight: 800, letterSpacing: 1 }}
        >
          {productData.name}
        </Typography>
        <Box sx={{ py: 2 }}>
          <PoleGrid poles={productData} />
        </Box>

        <Typography
          gutterBottom
          variant="h5"
          sx={{ pt: 2, fontWeight: 800, letterSpacing: 1 }}
        >
          OVERVIEW
        </Typography>
        <Divider />

        <Typography gutterBottom variant="h6" sx={{ py: 4 }}>
          {productData.overview}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ pt: 2, fontWeight: 800, letterSpacing: 1 }}
        >
          SPECIFICATIONS
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <SpecsGrid field="SIZE" value={sizes.join(", ")} />
        <SpecsGrid field="COLOR" value={colors.sort().join(", ")} />
      </Container>
    </main>
  );
}

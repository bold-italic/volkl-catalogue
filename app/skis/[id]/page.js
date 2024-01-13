"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getOneProduct } from "@/lib/actions/ski-actions";
import SkiGrid from "@/components/skis/ski-grid";
import SpecsGrid from "@/components/specs-grid";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function SkiView() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [productData, setProductData] = useState({});
  const sizes = productData.size || [];
  const category = productData.category || [];
  const rocker = productData.rocker || [];
  const core = productData.core || [];
  const base = productData.base || [];
  const age = productData.age || [];
  const genders = productData.gender || [];
  const skiingLevels = productData.skiingLevel || [];

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const ski = await getOneProduct(id);
      setProductData(ski);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Container sx={{ py: 6 }} maxWidth="xl">
        <Typography
          gutterBottom
          variant="h4"
          sx={{ fontWeight: 800, letterSpacing: 1 }}
        >
          {productData.name}
        </Typography>
        <Box sx={{ py: 2 }}>
          <SkiGrid skis={productData} />
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
        <SpecsGrid field="CATEGORY" value={category} />
        <SpecsGrid field="ROCKER" value={rocker} />
        <SpecsGrid field="CORE" value={core} />
        <SpecsGrid field="BASE" value={base} />
        <SpecsGrid field="AGE" value={age} />
        <SpecsGrid field="GENDER" value={genders.join(", ")} />
        <SpecsGrid field="SKIING LEVEL" value={skiingLevels.join(", ")} />
      </Container>
    </main>
  );
}

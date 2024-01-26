"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { getOneProduct } from "@/lib/product-actions";
import PhotoGrid from "@/components/photo-grid";
import SpecsGrid from "@/components/specs-grid";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ProductView() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [loading, setLoading] = useState(true);

  const [productData, setProductData] = useState({});
  const sizes = productData.size || [];
  const category = productData.category || [];
  const rocker = productData.rocker || [];
  const core = productData.core || [];
  const base = productData.base || [];
  const age = productData.age || [];
  const genders = productData.gender || [];
  const skiingLevels = productData.skiingLevel || [];
  const colors = productData.color || [];
  const bindingCategory = productData.bindingCategory || [];
  const bindingWeight = productData.bindingWeight || [];
  const range = productData.range || [];

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const product = await getOneProduct(id);

      if (!product) {
        // Product not found, redirect to the not-found page
        router.push("/app/not-found");
        return;
      }

      setProductData(product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [fetchProduct]);

  return (
    <main>
      {loading ? (
        ""
      ) : productData.name ? (
        <div>
          <Container sx={{ py: 6 }} maxWidth="xl">
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: 800, letterSpacing: 1 }}
            >
              {productData.name}
            </Typography>
            <Box sx={{ py: 2 }}>
              <PhotoGrid photos={productData} />
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

            {productData.tag === "skis" && (
              <>
                <SpecsGrid field="SIZE" value={sizes.join(", ")} />
                <SpecsGrid field="CATEGORY" value={category} />
                <SpecsGrid field="ROCKER" value={rocker} />
                <SpecsGrid field="CORE" value={core} />
                <SpecsGrid field="BASE" value={base} />
                <SpecsGrid field="AGE" value={age} />
                <SpecsGrid field="GENDER" value={genders.join(", ")} />
                <SpecsGrid
                  field="SKIING LEVEL"
                  value={skiingLevels.join(", ")}
                />
              </>
            )}

            {productData.tag === "bindings" && (
              <>
                <SpecsGrid field="SIZE" value={sizes.join(", ")} />
                <SpecsGrid field="COLOR" value={colors.sort().join(", ")} />
                <SpecsGrid field="CATEGORY" value={bindingCategory} />
                <SpecsGrid field="AGE" value={age} />
                <SpecsGrid field="BINDING WEIGHT" value={bindingWeight} />
                <SpecsGrid field="DIN/ISO RANGE" value={range} />
              </>
            )}

            {productData.tag === "poles" && (
              <>
                <SpecsGrid field="SIZE" value={sizes.join(", ")} />
                <SpecsGrid field="COLOR" value={colors.sort().join(", ")} />
              </>
            )}
          </Container>
        </div>
      ) : (
        <div>{router.push("/app/not-found")}</div>
      )}
    </main>
  );
}

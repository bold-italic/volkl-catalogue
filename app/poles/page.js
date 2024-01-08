"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/banner";
import { getAllProducts } from "@/lib/actions/poleActions";
import ProductGrid from "@/components/product-grid";

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
      <ProductGrid products={products} />
    </main>
  );
}

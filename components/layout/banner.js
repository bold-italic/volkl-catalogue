import Image from "next/image";

import binding_banner from "@/assets/binding_banner.webp";
import poles_banner from "@/assets/poles_banner.webp";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const banners = [
  { id: 1, image: binding_banner, alt: "ALL BINDINGS", text: "" },
  {
    id: 2,
    image: poles_banner,
    alt: "POLES",
    text: "Make your day Phantastick! Blending the ultimate style with state of the art performance features, Völkl poles complete the package for all categories of skiing.",
  },
];

export default function Banner({ bannerName }) {
  if (bannerName === "bindings") {
    return (
      <Container>
        {banners
          .filter((banner) => banner.id === 1)
          .map((banner) => (
            <Image key={banner.id} src={banner.image} alt={banner.alt} />
          ))}
      </Container>
    );
  } else if (bannerName === "poles") {
    return (
      <>
        {banners
          .filter((banner) => banner.id === 2)
          .map((banner) => (
            <Image key={banner.id} src={banner.image} alt={banner.alt} />
          ))}
      </>
    );
  }
}

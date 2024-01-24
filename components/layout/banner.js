import Link from "next/link";
import Image from "next/image";

import main_banner from "@/assets/01-main_banner.webp";
import racing_banner from "@/assets/02-racing_banner.webp";
import all_mountain_banner from "@/assets/03-all_mountain_banner.webp";
import freeride_banner from "@/assets/04-freeride_banner.webp";
import freestyle_banner from "@/assets/05-freestyle_banner.webp";
import touring_banner from "@/assets/06-touring_banner.webp";
import all_skis_banner from "@/assets/07-all_skis_banner.webp";
import binding_banner from "@/assets/08-binding_banner.webp";
import poles_banner from "@/assets/09-poles_banner.webp";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const banners = [
  {
    id: 1,
    image: main_banner,
    alt: "VÖLKL HISTORY",
    text: "Since 1923 Völkl has stood for unlimited passion for skiing and making high performance products. Based in Straubing, Völkl is the largest (and one of the last remaining) manufacturer in Germany, and our headquarters is one of the most modern production facilities in the world. Here, high-tech innovation meets traditional craftsmanship to create the most precise, highest quality, and technologically advanced skis in the world. Our team of engineers, experienced craftsmen, tinkerers, and testers-as well as numerous top athletes and uncounted victories-have made Völkl one of the biggest ski brands in the world.",
  },
  {
    id: 2,
    image: racing_banner,
    alt: "RACE",
    text: "Mirroring the latest technology derived from the World Cup, our Racetiger models will make all your high-speed runs more fun, whether you are chasing FIS points or another NASTAR gold!",
  },
  {
    id: 3,
    image: all_mountain_banner,
    alt: "ALL MOUNTAIN",
    text: "From groomers to bumps to trees, you'll find one ski to do it all in our Deacon All Mountain Series.",
  },
  {
    id: 4,
    image: freeride_banner,
    alt: "FREERIDE",
    text: "Choose your sweet spot and ride - from the front side to full blown powder, you'll find a model that brings the right blend of float and turning characteristics.",
  },
  {
    id: 5,
    image: freestyle_banner,
    alt: "FREESTYLE",
    text: "Choose your sweet spot and ride - from the front side to full blown powder, you'll find a model that brings the right blend of float and turning characteristics.",
  },
  {
    id: 6,
    image: touring_banner,
    alt: "TOURING",
    text: "Völkl's touring products merge the lightest possible weight specifications with category-defying performance on the descent.",
  },
  {
    id: 7,
    image: all_skis_banner,
    alt: "ALL SKIS",
    text: "",
  },
  {
    id: 8,
    image: binding_banner,
    alt: "ALL BINDINGS",
    text: "Völkl poles seamlessly integrate cutting-edge performance features with unparalleled style, making them the ideal choice for skiers in every category.",
  },
  {
    id: 9,
    image: poles_banner,
    alt: "POLES",
    text: "Make your day Phantastick! Blending the ultimate style with state of the art performance features, Völkl poles complete the package for all categories of skiing.",
  },
];

const bannerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const bannerImageStyle = {
  width: "100%",
  maxWidth: "100%",
  maxHeight: "350px",
  objectFit: "cover",
};

const containerStyle = {
  padding: 0,
};

const breadCrumbsStyle = {
  fontWeight: 500,
  fontSize: 17,
  paddingLeft: 0,
  ":hover": {
    textDecoration: "solid underline 2px",
  },
};

function BannerHandler({ bannerId }) {
  const selectedBanner = banners.find((banner) => banner.id === bannerId);

  if (!selectedBanner) {
    return null; // or handle the case when the bannerId is not found
  }

  return (
    <div>
      <Container maxWidth="string" style={containerStyle}>
        <Paper elevation={7} style={bannerContainerStyle}>
          <Image
            src={selectedBanner.image}
            alt={selectedBanner.alt}
            width={1000}
            height={500}
            style={bannerImageStyle}
          />
        </Paper>
      </Container>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <div key={selectedBanner.id}>
          <Typography
            variant="h4"
            sx={{ pb: 1, pt: 4, fontWeight: 800, letterSpacing: 1 }}
          >
            {selectedBanner.alt}
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ py: 3 }}>
            {selectedBanner.text}
          </Typography>
        </div>
      </Container>
      {selectedBanner.id !== 1 && ( // Conditionally render breadcrumbs if id is not 1 (Home page)
        <Container maxWidth="xl" sx={{ py: 0 }}>
          <div key={selectedBanner.id}>
            <Breadcrumbs aria-label="breadcrumb">
              <Button component={Link} href="/" sx={breadCrumbsStyle}>
                HOME
              </Button>
              <div color="primary">{selectedBanner.alt}</div>
            </Breadcrumbs>
          </div>
        </Container>
      )}
    </div>
  );
}

export default function Banner({ bannerName }) {
  const bannerId = parseInt(bannerName);

  if (
    bannerId === 1 ||
    bannerId === 2 ||
    bannerId === 3 ||
    bannerId === 4 ||
    bannerId === 5 ||
    bannerId === 6 ||
    bannerId === 7 ||
    bannerId === 8 ||
    bannerId === 9
  ) {
    return <BannerHandler bannerId={bannerId} />;
  }

  return null; // or handle the case when bannerName is not 1 or 2
}

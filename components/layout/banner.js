import main_banner from "@/assets/01-main_banner.webp";
import racing_banner from "@/assets/02-racing_banner.webp";
import all_mountain_banner from "@/assets/03-all_mountain_banner.webp";
import freeride_banner from "@/assets/04-freeride_banner.webp";
import freestyle_banner from "@/assets/05-freestyle_banner.webp";
import junior_banner from "@/assets/06-junior_banner.webp";
import touring_banner from "@/assets/07-touring_banner.webp";
import all_skis_banner from "@/assets/08-all_skis_banner.webp";
import binding_banner from "@/assets/09-binding_banner.webp";
import poles_banner from "@/assets/10-poles_banner.webp";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

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
    image: junior_banner,
    alt: "JUNIOR SKIS",
    text: "Völkl's Junior models are tailored to the riding needs of developing skiers, from first-timers to budding all mountain and park skiers.",
  },
  {
    id: 7,
    image: touring_banner,
    alt: "TOURING",
    text: "Völkl's touring products merge the lightest possible weight specifications with category-defying performance on the descent.",
  },
  {
    id: 8,
    image: all_skis_banner,
    alt: "ALL SKIS",
    text: "",
  },
  {
    id: 9,
    image: binding_banner,
    alt: "ALL BINDINGS",
    text: "Völkl poles seamlessly integrate cutting-edge performance features with unparalleled style, making them the ideal choice for skiers in every category.",
  },
  {
    id: 10,
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

const bannerNameStyle = {
  fontWeight: 900,
  fontSize: 30,
  letterSpacing: 1,
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
          <img
            key={selectedBanner.id}
            src={selectedBanner.image.src}
            alt={selectedBanner.alt}
            style={bannerImageStyle}
          />
        </Paper>
      </Container>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <div key={selectedBanner.id}>
          <div style={bannerNameStyle}>{selectedBanner.alt}</div>
          <div>{selectedBanner.text}</div>
        </div>
      </Container>
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
    bannerId === 9 ||
    bannerId === 10
  ) {
    return <BannerHandler bannerId={bannerId} />;
  }

  return null; // or handle the case when bannerName is not 1 or 2
}

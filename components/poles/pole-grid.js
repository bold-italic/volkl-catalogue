import Link from "next/link";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

export default function PoleGrid({ poles }) {
  const images = poles.image || [];

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          component={Link}
          href={image}
        >
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" image={image} alt={poles.name} />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

export default function PhotoGrid({ photos }) {
  const images = photos.image || [];

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" image={image} alt={photos.name} />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

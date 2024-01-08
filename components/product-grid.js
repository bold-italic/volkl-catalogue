import Link from "next/link";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function ProductGrid({ products }) {
  return (
    <main>
      <Container sx={{ py: 5 }} maxWidth="xl">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid
              item
              key={product._id}
              xs={12}
              sm={6}
              md={4}
              component={Link}
              href={{
                pathname: `/product/${product?._id}`,
                query: { name: product?.name },
              }}
              sx={{
                textDecoration: "unset",
                ":hover": {
                  textDecoration: "solid underline 2px",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image[0]}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="h2"
                      align="center"
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

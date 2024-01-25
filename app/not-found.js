import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ pb: 1, pt: 4, fontWeight: 800, letterSpacing: 1 }}
        >
          PAGE NOT FOUND
        </Typography>
        <Typography variant="h6" align="center" sx={{ py: 3 }}>
          Sorry, we couldn't connect you to the page you are looking for
        </Typography>
      </Container>
    </main>
  );
}

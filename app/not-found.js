import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function NotFound() {
  return (
    <main>
      <Container sx={{ py: 2 }} maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ pb: 1, pt: 4, fontWeight: 800, letterSpacing: 1 }}
        >
          NOT FOUND
        </Typography>
        <Divider />
        <Typography variant="h6" sx={{ py: 3 }}>
          Unfortunately, we could not find the requested page or resource.
        </Typography>
      </Container>
    </main>
  );
}

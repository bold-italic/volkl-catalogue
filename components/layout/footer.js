import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const footerItems = [
  { label: "ABOUT AS", link: "#" },
  { label: "INNOVATIONS", link: "#" },
  { label: "CAREERS", link: "#" },
  { label: "CONTACT US", link: "#" },
];

export default function Footer() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#ffed00", py: 5 }}>
      <Container maxWidth="xl" position="static">
        {/* Desktop view Menu */}
        <Stack
          direction="row"
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Mapping footer items */}
          {footerItems.map((item) => (
            <Button key={item.label} href={item.link} color="inherit">
              {item.label}
            </Button>
          ))}
        </Stack>
        {/* Mobile view Menu */}
        <Stack
          direction="column"
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
        >
          {/* Mapping footer items */}
          {footerItems.map((item) => (
            <Button
              key={item.label}
              href={item.link}
              color="inherit"
              sx={{ fontWeight: 700, fontSize: 15 }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

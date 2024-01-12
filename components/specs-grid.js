import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function SpecsGrid({ field, value }) {
  return (
    <Box>
      <Box sx={{ display: "flex", py: 1.5 }}>
        <Box>
          <Typography sx={{ fontWeight: 600, letterSpacing: 1 }}>
            {field}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
            pl: 5,
          }}
        >
          <Typography>{value}</Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
